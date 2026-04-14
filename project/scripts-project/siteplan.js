document.addEventListener("DOMContentLoaded", () => {
    // ------------------- Fecha de modificación -------------------// 
    const currentYearElem = document.getElementById("currentyear");
    const lastModifiedElem = document.getElementById("lastModified");

    if (currentYearElem) {
        currentYearElem.textContent = new Date().getFullYear();
    }
    if (lastModifiedElem) {
        lastModifiedElem.textContent = `Last Modification: ${document.lastModified}`;
    }

    // ------------------- Menú hamburguesa -------------------//
    const menuButton = document.getElementById("menu-button");
    const nav = document.querySelector("nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("nav-open");
        });
    }

    // ------------------- Validación del formulario -------------------//
    const formulario = document.querySelector(".formulario");
    if (formulario) {
        formulario.addEventListener("submit", validarFormulario);
    }
});

// ------------------- Función de validación y ramificación condicional -------------------//
function validarFormulario(event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente//

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();

    // Validación básica//
    if (name === "" || email === "" || number === "") {
        alert("Por favor, completa todos los campos antes de suscribirte.");
        return;
    }

    // Ramificación condicional según tipo de correo//
    if (email.endsWith("@gmail.com")) {
        alert(`¡Gracias ${name}! Tu suscripción con Gmail ha sido registrada. 🎉`);
    } else if (email.endsWith("@yahoo.com")) {
        alert(`¡Gracias ${name}! Tu suscripción con Yahoo ha sido registrada.`);
    } else {
        alert(`¡Gracias ${name}! Te has suscrito correctamente a Bordados Sayde.`);
    }

    // Limpiar formulario//
    event.target.reset();
}

// objeto JavaScript para un producto//
const productos = [
    { nombre: "Modelo 1", imagen: "modelo1.jpg", tallas: ["S", "M", "L", "XL"], precio: 250, disponible: true },
    { nombre: "Modelo 2", imagen: "modelo2.jpg", tallas: ["S", "M", "L", "XL"], precio: 150, disponible: true },
    { nombre: "Modelo 3", imagen: "modelo3.jpg", tallas: ["S", "M", "L", "XL"], precio: 220, disponible: true },
    { nombre: "Modelo 4", imagen: "modelo4.jpg", tallas: ["S", "M", "L", "XL"], precio: 260, disponible: true },
    { nombre: "Modelo 5", imagen: "modelo5.jpg", tallas: ["S", "M", "L", "XL"], precio: 300, disponible: true },
    { nombre: "Modelo 6", imagen: "modelo6.jpg", tallas: ["S", "M", "L", "XL"], precio: 210, disponible: true },
    { nombre: "Modelo 7", imagen: "modelo7.jpg", tallas: ["S", "M", "L", "XL"], precio: 256, disponible: true },
    { nombre: "Modelo 8", imagen: "modelo8.jpg", tallas: ["S", "M", "L", "XL"], precio: 180, disponible: true },
    { nombre: "Modelo 9", imagen: "modelo9.jpg", tallas: ["S", "M", "L", "XL"], precio: 210, disponible: true },
    { nombre: "Modelo 10", imagen: "modelo10.jpg", tallas: ["S", "M", "L", "XL"], precio: 300, disponible: true },
    { nombre: "Modelo 11", imagen: "modelo11.jpg", tallas: ["S", "M", "L", "XL"], precio: 250, disponible: true },
    { nombre: "Modelo 12", imagen: "modelo12.jpg", tallas: ["S", "M", "L", "XL"], precio: 310, disponible: true },
    { nombre: "Modelo 13", imagen: "modelo13.jpg", tallas: ["S", "M", "L", "XL"], precio: 190, disponible: true },
    { nombre: "Modelo 14", imagen: "modelo14.jpg", tallas: ["S", "M", "L", "XL"], precio: 230, disponible: true },
    { nombre: "Modelo 15", imagen: "modelo15.jpg", tallas: ["S", "M", "L", "XL"], precio: 310, disponible: true },
    { nombre: "Modelo 16", imagen: "modelo16.jpg", tallas: ["S", "M", "L", "XL"], precio: 450, disponible: true },
    { nombre: "Modelo 17", imagen: "modelo17.jpg", tallas: ["S", "M", "L", "XL"], precio: 240, disponible: true },
    { nombre: "Modelo 18", imagen: "modelo18.jpg", tallas: ["S", "M", "L", "XL"], precio: 290, disponible: true },
    { nombre: "Modelo 19", imagen: "modelo19.jpg", tallas: ["S", "M", "L", "XL"], precio: 270, disponible: true },
    { nombre: "Modelo 20", imagen: "modelo20.jpg", tallas: ["S", "M", "L", "XL"], precio: 180, disponible: true },
    { nombre: "Modelo 21", imagen: "modelo21.jpg", tallas: ["S", "M", "L", "XL"], precio: 200, disponible: true },
    { nombre: "Modelo 22", imagen: "modelo22.jpg", tallas: ["S", "M", "L", "XL"], precio: 280, disponible: true },
    { nombre: "Modelo 23", imagen: "modelo23.jpg", tallas: ["S", "M", "L", "XL"], precio: 200, disponible: true },
    { nombre: "Modelo 24", imagen: "modelo24.jpg", tallas: ["S", "M", "L", "XL"], precio: 300, disponible: true },
];
const contenedor = document.querySelector(".store");

productos.forEach(producto => {
    const figure = document.createElement("figure");
    figure.innerHTML = `
        <img src="imgs/${producto.imagen}" alt="${producto.nombre}">
        <figcaption>
            <b>Tallas:</b> ${producto.tallas.join(", ")} <br>
            <b>Precio:</b> $${producto.precio} <br>
            ${producto.disponible ? "✅ Disponible" : "❌ Agotado"}
        </figcaption>
    `;
    contenedor.appendChild(figure);
});
