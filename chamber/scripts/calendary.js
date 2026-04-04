
// 1. Insertar timestamp en formulario
document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }
});


// 2. Abrir modales al hacer click en "More Info"
document.querySelectorAll(".open-modal").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const modalId = link.parentElement.dataset.modal;
        document.getElementById(modalId).style.display = "block";
    });
});

// 3. Cerrar modales con el botón "Close"
document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".modal").style.display = "none";
    });
});

// 4. Cerrar modales al hacer click fuera del contenido
window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// 5. Cerrar modales con la tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll(".modal").forEach(modal => {
            modal.style.display = "none";
        });
    }
});