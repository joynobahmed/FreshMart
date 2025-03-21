
const loadHome = () => {    
    let currentIndex = -1;
    
    function showNextSlide() {
        const slide = document.querySelector(".slide");
        const slideImg = document.getElementById("slide-img");
        const slideTitle = document.getElementById("slide-title");
        const slideText = document.getElementById("slide-text");
    
        if (currentIndex !== -1) {
            slide.classList.add("exit");
            setTimeout(() => {
                slide.classList.remove("exit");
            }, 1000);
        }
    
        currentIndex = Math.floor(Math.random() * product_list.length);
        const product = product_list[currentIndex];
    
        slideImg.src = product.image;
        slideTitle.textContent = `${product.name} - ${product.price}`;
        slideText.textContent = product.desc;
    
        slide.classList.add("active");
    
        setTimeout(() => {
            slide.classList.remove("active");
            showNextSlide();
        }, 3000);
    }
    
    setTimeout(showNextSlide, 1000);
    
}

