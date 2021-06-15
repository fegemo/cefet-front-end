const tutorial = {
  turnedOn: true,
  timer: 0,
  boundEvents: [],

  start(deck, el) {
    this.el = el

    let appearances = localStorage.getItem('bespoke-tutorial-appeared') || 0
    appearances = window.parseInt(appearances)

    if (appearances < 3) {
      // Listens for changes in the slide
      this.boundEvents.push(deck.on('next', this.deactivate.bind(this)))
      this.boundEvents.push(deck.on('prev', this.deactivate.bind(this)))

      this.timer = window.setTimeout(this.show.bind(this), 3000)
      localStorage.setItem('bespoke-tutorial-appeared', ++appearances)
    }
  },

  deactivate() {
    this.turnedOn = false
    this.el.parentNode.removeChild(this.el)
    window.clearTimeout(this.timer)
    for (let i = 0; i < this.boundEvents.length; i++) {
      this.boundEvents[i]()
    }
  },

  show() {
    this.el.classList.add('tutorial-on')
  }
}

module.exports = tutorialEl => deck => tutorial.start(deck, tutorialEl)

