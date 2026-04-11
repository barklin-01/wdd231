import { places } from "../data/places.mjs";

const main = document.querySelector("main");

places.forEach(place => {
    const card = document.createElement("section");

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img src="${place.image_url}" alt="${place.name}" width="300" height="200" loading="lazy">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <p><strong>Cost:</strong> ${place.cost}</p>

        <button type="button">Más información</button>
    `;

    main.appendChild(card);
});