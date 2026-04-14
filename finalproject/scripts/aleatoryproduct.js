
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