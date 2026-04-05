document.addEventListener("DOMContentLoaded", () => {

    // --- INSERTAR TIMESTAMP ---
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // --- RELLENAR BENEFICIOS DE MEMBERSHIP ---
    const membershipTexts = {
        npText: "This membership is for non-profit organizations and is free of charge. Benefits include basic platform access, newsletter subscription, and participation in selected events.",
        bronzeText: "Bronze Membership includes all NP benefits plus full event participation, basic training access, and listing in the member directory.",
        silverText: "Silver Membership includes all Bronze benefits plus featured advertisement on the members page, discounts on events and services, and advanced training access.",
        goldText: "Gold Membership includes all Silver benefits plus homepage or newsletter advertisement, one-on-one consulting or mentoring, and invitations to exclusive events."
    };

    for (const id in membershipTexts) {
        const el = document.getElementById(id);
        if (el) el.textContent = membershipTexts[id];
    }

    // --- ABRIR MODALES ---
    document.querySelectorAll(".open-modal").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const modalId = link.parentElement.dataset.modal;
            document.getElementById(modalId).style.display = "flex";
        });
    });

    // --- CERRAR MODALES CON BOTÓN ---
    document.querySelectorAll(".close-btn").forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".modal").style.display = "none";
        });
    });

    // --- CERRAR MODALES HACIENDO CLICK FUERA DEL CONTENIDO ---
    window.addEventListener("click", (e) => {
        document.querySelectorAll(".modal").forEach(modal => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // --- CERRAR MODALES CON TECLA ESC ---
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".modal").forEach(modal => {
                modal.style.display = "none";
            });
        }
    });

});