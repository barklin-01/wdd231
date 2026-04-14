const container = document.querySelector('.store');
const buttons = document.querySelectorAll('.filters button');

let allProducts = [];

// FETCH
async function loadProducts() {
    try {
        const response = await fetch('data/products.json');

        if (!response.ok) {
            throw new Error('Error loading products');
        }

        const data = await response.json();
        allProducts = data;

        displayProducts(allProducts);

    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>Error loading products</p>";
    }
}

// MOSTRAR PRODUCTOS
function displayProducts(products) {
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p class="price"><strong>$${product.price}</strong></p>
            <p class="description">${product.description}</p>
        `;

        container.appendChild(card);
    });
}

// FILTROS
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        if (category === "all") {
            displayProducts(allProducts);
        } else {
            const filtered = allProducts.filter(product => product.category === category);
            displayProducts(filtered);
        }
    });
});

// iniciar
loadProducts();
