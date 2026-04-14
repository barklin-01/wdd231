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

// Radon productos aleatorios
async function loadRandomProduct() {
    try {
        const res = await fetch('data/products.json');

        if (!res.ok) {
            throw new Error('Error loading products');
        }

        const products = await res.json();

        // Elegir 3 productos aleatorios
        const randomProducts = [];
        while (randomProducts.length < 3) {
            const random = products[Math.floor(Math.random() * products.length)];
            if (!randomProducts.includes(random)) {
                randomProducts.push(random);
            }
        }

        displayRandomProducts(randomProducts);

    } catch (error) {
        console.error(error);
    }
}

function displayRandomProducts(products) {
    const container = document.querySelector('.random-product');

    if (!container) return;

    container.innerHTML = `
        <div class="random-products-row">
            ${products.map(product => `
                <div class="random-card">
                    <!-- Enlace alrededor de la imagen -->
                    <a href="store.html?productId=${product.id}" class="random-card-link">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </a>
                </div>
            `).join('')}
        </div>
    `;
}

// iniciar
loadRandomProduct();