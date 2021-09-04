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
