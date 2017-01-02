// Require Node modules in the browser thanks to Browserify: http://browserify.org

var bespoke = require('bespoke'),
    fancy = require('bespoke-theme-fancy'),
    keys = require('bespoke-keys'),
    touch = require('bespoke-touch'),
    //bullets = require('bespoke-bullets'),
    scale = require('bespoke-scale'),
    hash = require('bespoke-hash'),
    overview = require('bespoke-simple-overview'),
    progress = require('bespoke-progress'),
    state = require('bespoke-state'),
    markdown = require('bespoke-meta-markdown'),
    forms = require('bespoke-forms'),
    backdrop = require('bespoke-backdrop'),
    qrcode = require('bespoke-qrcode'),
    easter = require('./easter'),
    tutorial = require('./tutorial'),
    caniuseWidget = require('./caniuse');

// Bespoke.js
bespoke.from('article', [
  markdown({
    backdrop: function(slide, value) {
      slide.setAttribute('data-bespoke-backdrop', value);
    },
    scripts: function(slide, url) {
      var placeToPutScripts = document.body;
      url = !Array.isArray(url) ? [url] : url;

      function loadScriptChain(i) {
        var s = document.createElement('script');
        s.src = url[i];
        if (i < url.length - 1) {
          s.addEventListener('load', function () {
              loadScriptChain(i+1);
          });
        }
        placeToPutScripts.appendChild(s);
      }
      loadScriptChain(0);
    },
    styles: function(slide, value) {
      var placeToPutStyles = document.head;
      value = !Array.isArray(value) ? [value] : value;
      value.forEach(function (url) {
        var l = document.createElement('link');
        l.rel = 'stylesheet';
        l.href = url;
        placeToPutStyles.appendChild(l);
      });
    },
  }),
  fancy(),
  keys(),
  touch(),
  overview({ insertStyles: false }),
  //bullets('li:not(.bullet-old), .bullet, dt:not(.bullet-old), dd:not(.bullet-old)'),
  // scale(),
  hash(),
  progress(),
  state(),
  forms(),
  backdrop(),
  qrcode(),
  tutorial(document.getElementsByClassName('tutorial')[0])
]);

easter();

// Can I Use widget
window.canIUseDataLoaded = caniuseWidget.canIUseDataLoaded;

// Used to load gmaps api async (it requires a callback to be passed)
window.noop = function() {};
