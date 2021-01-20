const bespoke = require('bespoke'),
  beachday = require('bespoke-theme-beachday'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  overview = require('bespoke-simple-overview'),
  progress = require('bespoke-progress'),
  state = require('bespoke-state'),
  markdown = require('bespoke-markdownit'),
  markdownItAnchor = require('markdown-it-anchor'),
  markdownItDefList = require('markdown-it-deflist'),
  markdownItAbbr = require('markdown-it-abbr'),
  markdownItContainer = require('markdown-it-container'),
  markdownItDecorate = require('markdown-it-decorate'),
  markdownItEmoji = require('markdown-it-emoji'),
  forms = require('bespoke-forms'),
  backdrop = require('bespoke-backdrop'),
  proceed = require('./bespoke-proceed'),
  easter = require('./easter'),
  tutorial = require('./tutorial'),
  markdownItConfig = require('./markdown-config');

// Bespoke.js
bespoke.from('article', [
  markdown(markdownItConfig.config, markdownItConfig.extensions),
  beachday({ insertFonts: false }),
  keys(),
  touch(),
  overview({ insertStyles: false }),
  bullets('.bullet, .bulleted li, .bulleted dd, .bulleted-dt dt, .bulleted-dt dd, .bulleted-0 > li, .bulleted-0 > dt, .bullleted-0 > dd, .bulleted-pre pre'),
  // still need to improve bespokeProceed: give feedback to user, switch to JSON comments etc.
  proceed(),
  scale('transform'),
  progress(), // progress must be after scale
  hash(),
  state(),
  forms(),
  backdrop(),
  tutorial(document.getElementsByClassName('tutorial')[0])
]);

easter();

// Used to load gmaps api async (it requires a callback to be passed)
window.noop = function() {};
