
const loadHome = () => {    
    let currentIndex = -1;
    
    const showNextSlide = () => {
        const slide = document.querySelector(".slide");
        const slideImg = document.getElementById("slide-img");
        const slideTitle = document.getElementById("slide-title");
        const slideText = document.getElementById("slide-text");
    
        try {
            if (currentIndex !== -1) {
                slide.classList.add("exit");
                setTimeout(() => {
                    slide.classList.remove("exit");
                }, 1000);
            }
        } catch (error) {
            console.log(error)
        }
    
        currentIndex = Math.floor(Math.random() * product_list.length);
        const product = product_list[currentIndex];
    
        slideImg.src = product.image;
        slideTitle.textContent = `${product.name} - ${product.price}`;
        slideText.textContent = product.desc;
    
        slide.classList.add("active");
    
        setTimeout(() => {
            slide.classList.remove("active");
            setTimeout(() => showNextSlide(), 1000);
        }, 3000);
    }
    
    setTimeout(showNextSlide, 1000);
    
}

