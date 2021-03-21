const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click",() => {
        //Toggle 
        nav.classList.toggle('nav-links-active');
        navLinks.forEach((item,index) => {
            if (item.style.animation) {
                item.style.animation = '';
            } else {
                item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        })
    });
        
}

navSlide();