const toggleMenu = () =>{
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

let imgBox = document.querySelectorAll('.imgBox');
imgBox.forEach(item => {
    item.addEventListener('click',() => {
        item.classList.toggle('active');
    })
})
