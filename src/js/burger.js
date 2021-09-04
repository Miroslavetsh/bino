const burger = document.getElementById('burger');
const navPanel = document.getElementById('nav');

burger.addEventListener('click', () => {
    document.body.classList.toggle('body-active');
    burger.classList.toggle('burger-active');
    document.getElementById('nav').classList.toggle("nav-active");
    
})