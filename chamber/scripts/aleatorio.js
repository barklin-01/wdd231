async function loadSpotlights() {
    try {
        // Ruta corregida para tu estructura de carpetas
        const response = await fetch("data/members.json");
        const members = await response.json();

        // Filtrar empresas con nivel 2 o 3
        const spotlightEligible = members.filter(member => member.nivel === 2 || member.nivel === 3);

        // Seleccionar hasta 3 aleatoriamente sin repetir
        const spotlight = [];
        const numberToShow = Math.min(3, spotlightEligible.length);

        while (spotlight.length < numberToShow) {
            const randomIndex = Math.floor(Math.random() * spotlightEligible.length);
            const member = spotlightEligible[randomIndex];

            if (!spotlight.includes(member)) {
                spotlight.push(member);
            }
        }

        // Insertar las empresas en el contenedor HTML
        const container = document.getElementById("spotlight-container");
        container.innerHTML = "";

        spotlight.forEach(member => {
            const card = document.createElement("div");
            card.className = "spotlight-card";
            card.innerHTML = `
        <img src="${member.imagen}" alt="${member.nombre}">
        <h3>${member.nombre}</h3>
        <p>${member.direccion}</p>
        <p>${member.telefono}</p>
        <a href="${member.sitioWeb}" target="_blank" rel="noopener noreferrer">Sitio Web</a>
        <p>${member.descripcion}</p>
        `;
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error cargando spotlights:", error);
    }
}

// Ejecutar la función cuando la página termine de cargar
window.addEventListener('DOMContentLoaded', loadSpotlights);