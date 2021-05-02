const bespoke = require('bespoke'),
  // beachday = require('bespoke-theme-beachday'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  classes = require('bespoke-classes'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  overview = require('bespoke-simple-overview'),
  progress = require('bespoke-progress'),
  state = require('bespoke-state'),
  search = require('bespoke-search'),
  markdown = require('bespoke-markdownit'),
  forms = require('bespoke-forms'),
  backdrop = require('bespoke-backdrop'),
  proceed = require('./bespoke-proceed'),
  easter = require('./easter'),
  tutorial = require('./tutorial'),
  markdownItConfig = require('./markdown-config');

// Bespoke.js
bespoke.from("article", [
  markdown(markdownItConfig.config, markdownItConfig.extensions),
  classes(),
  // beachday({ insertFonts: false }),
  keys(),
  touch(),
  overview({ insertStyles: false }),
  bullets(
    ".bullet, .bulleted li, .bulleted dd, .bulleted-dt dt, .bulleted-dt dd, .bulleted-0 > li, .bulleted-0 > dt, .bullleted-0 > dd, .bulleted-pre pre"
  ),
  // still need to improve bespokeProceed: give feedback to user, switch to JSON comments etc.
  proceed(),
  scale("transform"),
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
  tutorial(document.getElementsByClassName("tutorial")[0]),
  (deck) => {
    setTimeout(() => (deck.parent.removeAttribute('style')), 200)
    }
]);

easter();

// Used to load gmaps api async (it requires a callback to be passed)
window.noop = function() {};
