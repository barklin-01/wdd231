
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


// ----------------------------------------------------------------------------------------------------
//Empresar aleatorias
// dentro de cham-course.js

document.addEventListener('DOMContentLoaded', () => {
    getMembers();
});

const spotlightContainer = document.getElementById('spotlight-container');
const membersURL = "./path_to_your/members.json"; // Cambia aquí la ruta correcta

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) throw new Error('Failed to load members JSON');

        const data = await response.json();

        const filteredMembers = data.filter(member => member.nivel === 2 || member.nivel === 3);

        const spotlightMembers = getRandomMembers(filteredMembers, 3);

        displaySpotlights(spotlightMembers);

    } catch (error) {
        console.error(error);
        spotlightContainer.textContent = "Unable to load spotlight members.";
    }
}

function getRandomMembers(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displaySpotlights(members) {
    spotlightContainer.innerHTML = '';

    members.forEach(member => {
        let membershipText = '';
        if (member.nivel === 3) membershipText = 'Gold';
        else if (member.nivel === 2) membershipText = 'Silver';

        const card = document.createElement('div');
        card.className = 'spotlight-card';

        card.innerHTML = `
        <img src="${member.imagen}" alt="${member.nombre} Logo" loading="lazy">
        <h3>${member.nombre}</h3>
        <p><strong>Phone:</strong> ${member.telefono}</p>
        <p><strong>Address:</strong> ${member.direccion}</p>
        <p><strong>Website:</strong> <a href="${member.sitioWeb}" target="_blank" rel="noopener">${member.sitioWeb}</a></p>
        <p class="membership-level">Membership Level: ${membershipText}</p>
    `;

        spotlightContainer.appendChild(card);
    });
}