import { events } from "../data/events.mjs";

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".events");
    const modal = document.querySelector("#eventModal");
    const modalBody = document.querySelector("#modalBody");
    const closeModal = document.querySelector("#closeModal");

    function openModal(eventData) {
        modalBody.innerHTML = `
            <h2>${eventData.name}</h2>
            <p>${eventData.description}</p>
            <p><strong>Date:</strong> ${eventData.date}</p>
            <p><strong>Location:</strong> ${eventData.location}</p>
            <p><strong>Entry:</strong> ${eventData.entry}</p>
        `;

        modal.classList.remove("hidden");
    }

    // ❌ cerrar con botón
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // ❌ cerrar click fuera
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });

    function getRandomEvents(arr, count) {
        return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
    }

    function displayEvents() {
        const randomEvents = getRandomEvents(events, 1);

        container.innerHTML = randomEvents.map((event, index) => `
            <div class="event-card">
                <img src="${event.image}" alt="${event.name}">
                <button class="info-btn" data-index="${index}">
                    More information
                </button>
            </div>
        `).join("");

        document.querySelectorAll(".info-btn").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                openModal(randomEvents[i]);
            });
        });
    }

    displayEvents();
    setInterval(displayEvents, 5000);

});
