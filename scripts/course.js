const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized...',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// seleccionar contenedores
const coursesContainer = document.querySelector("#courses");
const creditDisplay = document.querySelector("#totalCredits");

// función para mostrar los cursos
function displayCourses(courseList) {
    coursesContainer.innerHTML = "";

    courseList.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");

        // Crear el ícono de estado
        const statusIcon = document.createElement("span");
        statusIcon.classList.add("status-icon");
        if (course.completed) {
            statusIcon.textContent = "✓"; // visto
            card.classList.add("completed"); // verde
        } else {
            statusIcon.textContent = "✗"; // X
            card.classList.add("not-completed"); // rojo
        }

        // mostrar número y título del curso
        const title = document.createElement("span");
        title.textContent = `${course.subject} ${course.number}`;

        // agregar al card
        card.appendChild(statusIcon);
        card.appendChild(title);

        coursesContainer.appendChild(card);
    });

    // actualizar créditos totales según los cursos mostrados
    displayCredits(courseList);
}

// función para calcular créditos con reduce
function displayCredits(courseList) {
    const total = courseList.reduce((sum, course) => sum + course.credits, 0);
    creditDisplay.textContent = total;
}

// botones de filtro
document.querySelector("#all").addEventListener("click", () => displayCourses(courses));
document.querySelector("#wdd").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "WDD")));
document.querySelector("#cse").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "CSE")));

// mostrar todos al cargar la página
displayCourses(courses);