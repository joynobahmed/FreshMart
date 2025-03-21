const loadProducts = () => {
    const productListDiv = document.getElementById("product-list");
    if (!productListDiv) return;

    const vegChecked = document.getElementById("veg-filter").checked;
    const fruitChecked = document.getElementById("fruit-filter").checked;
    const maxPrice = document.getElementById("price-range").value;

    const filteredProducts = product_list.filter(product => {
        const matchesCategory = (!vegChecked && !fruitChecked) || 
            (vegChecked && product.category === "vegetable") || 
            (fruitChecked && product.category === "fruit");

            const price = Number(product.price.split("/")[0].trim())
        const matchesPrice = price <= maxPrice;
        
        return matchesCategory && matchesPrice;
    });
    
    
    productListDiv.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" width="100">
            <h3>${product.name}</h3>
            <p>Price: ${product.price} (BDT)</p>
            <p>Rating: ${product.rating}⭐</p>
            <p>${product.description}</p>
            <button class="buy-now-btn" onclick="buyNow('${product.name}', ${Number(product.price.split("/")[0].trim())})">Buy Now</button>
        </div>
    `).join("");


};
const attachProductFilterListeners = () => {
    document.getElementById("veg-filter")?.addEventListener("change", loadProducts);
    document.getElementById("fruit-filter")?.addEventListener("change", loadProducts);
    document.getElementById("price-range")?.addEventListener("input", function () {
        document.getElementById("price-value").textContent = this.value;
        loadProducts();
    });
};

const buyNow = (productName, productPrice) => {
    console.log(productName ,productPrice)
    alert(`You have selected "${productName}" for ${productPrice} BDT.`);
}