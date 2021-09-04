//Import burger
const burger = document.getElementById('burger')
const navPanel = document.getElementById('nav')

burger.addEventListener('click', () => {
  document.body.classList.toggle('body-active')
  burger.classList.toggle('burger-active')
  document.getElementById('nav').classList.toggle('nav-active')
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
/**
 * Add scrollIntoView method to Anchor prototype
 * @author Miroslavetsh
 *
 * It allows us to scroll to any block that we need
 * @param {string} blockSelector must be a valid css selector
 * @param {string} blockPosition contains one of values: 'start' | 'center' | 'end' | 'nearest', by default - 'start' following specification
 * @param {string} behavior contains one of values: 'auto' | 'smooth'
 *
 * @throws {Error | TypeError} depending on a place, where it happend
 */

HTMLAnchorElement.prototype.scrollIntoView = ({
  blockSelector,
  blockPosition = 'start',
  behavior = 'smooth',
}) => {
  try {
    if (typeof blockSelector !== 'string')
      throw new TypeError("Anchor's href must be a string")

    const blockToScroll = document.querySelector(blockSelector)

    try {
      blockToScroll.scrollIntoView({
        behavior,
        block: blockPosition,
      })
    } catch {
      console.error(new Error('Anchor must contain a valid css selector'))
    }
  } catch (error) {
    switch (error.type) {
      case TypeError:
        console.warn(error)
      default:
        console.error(error)
    }
  }
}

class ScrollingNavigation {
  /**
   * Navigation has a selector of links, that should be navigated after click event
   * @constructor
   * */
  constructor({ selector }) {
    this._menuItemSelector = selector
  }

  _getNavigationElements() {
    try {
      if (document.querySelectorAll(this._menuItemSelector).length !== 0) {
        return document.querySelectorAll(this._menuItemSelector)
      }

      throw new Error(`There is no ${this._menuItemSelector} elements on page`)
    } catch (e) {
      console.error(e)
    }
  }

  _handleClickOnLink(event) {
    event.preventDefault()

    const blockSelector = event.target.getAttribute('href')

    this.scrollIntoView({
      blockSelector,
    })
  }

  // Facade pattern, incapsulate logic into class and call @paraminit
  init() {
    const menuLinks = this._getNavigationElements()

    menuLinks.forEach((elem) => {
      if (elem.tagName.toLowerCase() !== 'a')
        throw new TypeError('Every navigation element must be an anchor')

      elem.addEventListener('click', this._handleClickOnLink)
    })
  }
}

const navigation = new ScrollingNavigation({
  selector: '.menu__link',
})

navigation.init()


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

