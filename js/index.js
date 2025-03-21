document.addEventListener("DOMContentLoaded", function () {
    const innerPage = document.querySelector(".inner-page");

    const loadPage = async (page) => {
        setActivePage(`${page}-nav-btn`);
        try {
            const response = await fetch(`./pages/${page}.html`);
            const html = await response.text();
            innerPage.innerHTML = html;
            if (page === "products") {
                loadProducts();
                attachProductFilterListeners();
            }
            else if(page === "home"){
                loadHome();
            }else if(page === "contact"){
                loadContact();
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

const navButtons = document.querySelectorAll(".nav-items");

const setActivePage = (activeId) => {
    navButtons.forEach(btn => btn.classList.remove("active")); 
    document.getElementById(activeId).classList.add("active");
};
