document.addEventListener("DOMContentLoaded", function () {
    const innerPage = document.querySelector(".inner-page");

    const loadPage = async (page) => {
        try {
            const response = await fetch(`./pages/${page}.html`);
            const html = await response.text();
            innerPage.innerHTML = html;
            if (page === "products") {
                loadProducts();
            }
        } catch (error) {
            innerPage.innerHTML = "<p>Error loading content.</p>";
            console.error("Error loading page:", error);
        }
    }

    document.getElementById("home-nav-btn").addEventListener("click", () => loadPage("home"));
    document.getElementById("products-nav-btn").addEventListener("click", () => loadPage("products"));
    document.getElementById("contact-nav-btn").addEventListener("click", () => loadPage("contact"));
    
    loadPage("home");
});