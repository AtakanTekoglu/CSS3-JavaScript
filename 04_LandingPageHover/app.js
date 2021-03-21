const changeImage =(param) =>{
    document.querySelector(".imgArea img").src = param;
  
}

const ToggleMenu = () =>{
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

}