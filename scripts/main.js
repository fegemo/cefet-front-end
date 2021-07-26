const bespoke = require('bespoke')
const keys = require('bespoke-keys')
const touch = require('bespoke-touch')
const classes = require('bespoke-classes')
const bullets = require('bespoke-bullets')
const scale = require('bespoke-scale')
const hash = require('bespoke-hash')
const overview = require('bespoke-simple-overview')
const progress = require('bespoke-progress')
const state = require('bespoke-state')
const search = require('bespoke-search')
const markdown = require('bespoke-markdownit')
const forms = require('bespoke-forms')
const backdrop = require('bespoke-backdrop')
const proceed = require('./bespoke-proceed')
const easter = require('./easter')
const tutorial = require('./tutorial')
const markdownItConfig = require('./markdown-config')

// Bespoke.js
bespoke.from('article', [
  markdown(markdownItConfig.config, markdownItConfig.extensions),
  classes(),
  // beachday({ insertFonts: false }),
  keys(),
  touch(),
  overview({ insertStyles: false }),
  bullets(
    '.bullet, .bulleted li, .bulleted dd, .bulleted-dt dt, .bulleted-dt dd, .bulleted-0 > li, .bulleted-0 > dt, .bullleted-0 > dd, .bulleted-pre pre'
  ),
  // still need to improve bespokeProceed: give feedback to user, switch to JSON comments etc.
  proceed(),
  scale('transform'),
  progress(), // progress must be after scale
  hash(),
  state(),
  forms(),
  backdrop(),
  search({ insertStyles: false, text: {
    instructions: 'Instruções',
    searchHere: 'Digite aqui...',
    openSearch: 'Abrir pesquisa',
    closeSearch: 'Fechar pesquisa',
    search: 'Pesquisar',
    nextResult: 'Próximo resultado',
    previousResult: 'Resultado anterior'
  }}),
  tutorial(document.getElementsByClassName('tutorial')[0]),
  (deck) => {
    setTimeout(() => (deck.parent.removeAttribute('style')), 200)
  }
])

easter()

// Used to load gmaps api async (it requires a callback to be passed)
window.noop = function() {}
