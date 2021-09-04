//Import burger
const burger = document.getElementById('burger');
const navPanel = document.getElementById('nav');

burger.addEventListener('click', () => {
    document.body.classList.toggle('body-active');
    burger.classList.toggle('burger-active');
    document.getElementById('nav').classList.toggle("nav-active");
    
})

// Import header
const menuItems = document.querySelectorAll('.menu__item')
const menu = document.querySelector('.menu')
const header = document.querySelector('.header')

menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu__link')) {
    menuItems.forEach((elem) => {
      elem.classList.remove('menu__item-active')
      e.target.parentNode.classList.add('menu__item-active')
    })
  }
})

window.addEventListener('scroll', () => {
  header.classList.add('_fixed')
  if (window.scrollY === 0) header.classList.remove('_fixed')
})


// Import header
const menuLinks = document.querySelectorAll('.menu__link')

function Navigate(event) {
  event.preventDefault()
  const blockName = event.target.getAttribute('id')
  document.querySelector(`.${blockName}`).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
menuLinks.forEach((elem) => {
  elem.addEventListener('click', Navigate)
})


// Import up-button
const upButton = document.querySelector('#scroll-up-button')

upButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})


// Import slider
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

