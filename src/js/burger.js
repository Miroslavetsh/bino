const burger = document.getElementById('burger')
const navPanel = document.getElementById('nav')

burger.addEventListener('click', () => {
  document.body.classList.toggle('body-active')
  burger.classList.toggle('burger-active')
  navPanel.classList.toggle('nav-active')
})
