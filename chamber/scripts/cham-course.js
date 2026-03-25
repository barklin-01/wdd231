// Botón de hamburguesa
const menuButton = document.querySelector('#menu-button');
const links = document.querySelector('.links');
const main = document.querySelector('main');

menuButton.addEventListener('click', () => {
    links.classList.toggle('open');

    if (links.classList.contains('open')) {
        menuButton.textContent = '✕';
        main.style.paddingTop = links.offsetHeight + 10 + 'px'; // mueve main debajo del menú
    } else {
        menuButton.textContent = '☰';
        main.style.paddingTop = '10px'; // vuelve al padding original
    }
});

//Fecha de Modificacion
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Directorio de Miembros
const container = document.getElementById("membersContainer");

// Función para cargar los miembros usando fetch + async/await
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json'); // Ruta a tu JSON
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

// Función para mostrar los miembros en la página
function displayMembers(members) {
    container.innerHTML = ""; // Limpiar contenedor

    members.forEach(member => {
        const card = document.createElement("div");
        card.className = "member-card";
        card.innerHTML = `
            <img src="${member.imagen}" alt="${member.nombre}">
            <h2>${member.nombre}</h2>
            <p>${member.direccion}</p>
            <p>${member.telefono}</p>
            <p><a href="${member.sitioWeb}" target="_blank">${member.sitioWeb}</a></p>
            <p><strong>Membership level:</strong> ${member.nivel}</p>
            <p>${member.descripcion}</p>
        `;
        container.appendChild(card);
    });
}

// Alternar entre vista de cuadrícula y lista
document.getElementById("gridView").addEventListener("click", () => {
    container.className = "grid";
});

document.getElementById("listView").addEventListener("click", () => {
    container.className = "list";
});

// Cargar miembros al inicio
fetchMembers();