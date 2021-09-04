const upButton = document.querySelector('#scroll-up-button')

upButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
