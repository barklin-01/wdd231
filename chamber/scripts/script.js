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
