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
