import { places } from "../data/places.mjs";

const main = document.querySelector("main");

places.forEach(place => {
    const card = document.createElement("section");
    card.classList.add("card");

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img src="${place.image_url}" alt="${place.name}" width="300" height="200" loading="lazy">
        </figure>

        <div class="text">
            <p>${place.description}</p>
            <p class="cost"><strong>Cost:</strong> ${place.cost}</p>
            <address>${place.address}</address>
        </div>

        <button type="button" aria-label="More information about ${place.name}">
            More information
        </button>
    `;

    main.appendChild(card);
});


// VISIT MESSAGE (localStorage)
const messageBox = document.createElement("div");
messageBox.id = "visit-message";
document.body.prepend(messageBox);

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    // FIRST VISIT
    messageBox.textContent = "Welcome! If you have any questions, feel free to ask us.";
} else {
    const diffTime = now - Number(lastVisit);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        messageBox.textContent = "Welcome back! Great to see you again!";
    } else {
        const dayText = diffDays === 1 ? "day" : "days";
        messageBox.textContent = `Your last visit was ${diffDays} ${dayText} ago.`;
    }
}

// UPDATE LAST VISIT
localStorage.setItem("lastVisit", now);