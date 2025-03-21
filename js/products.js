const loadProducts = () => {
    console.log("called");
    const productListDiv = document.getElementById("product-list");
    if (!productListDiv) return;

    const vegChecked = document.getElementById("veg-filter").checked;
    const fruitChecked = document.getElementById("fruit-filter").checked;
    const maxPrice = document.getElementById("price-range").value;

    const filteredProducts = product_list.filter(product => {
        const matchesCategory = (!vegChecked && !fruitChecked) || 
            (vegChecked && product.category === "veg") || 
            (fruitChecked && product.category === "fruit");

        const matchesPrice = product.price <= maxPrice;
        
        return matchesCategory && matchesPrice;
    });

    productListDiv.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" width="100">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating}⭐</p>
            <p>${product.description}</p>
        </div>
    `).join("");
};
loadProducts();
