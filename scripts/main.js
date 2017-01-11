// Require Node modules in the browser thanks to Browserify: http://browserify.org

var bespoke = require('bespoke'),
    fancy = require('bespoke-theme-fancy'),
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
    // markdown = require('bespoke-meta-markdown'),
    forms = require('bespoke-forms'),
    backdrop = require('bespoke-backdrop'),
    qrcode = require('bespoke-qrcode'),
    easter = require('./easter'),
    tutorial = require('./tutorial'),
    caniuseWidget = require('./caniuse');

// Bespoke.js
bespoke.from('article', [
  markdown({
    alert: function(message, index) {
      alert(message + ' from slide no ' + index);
    },
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
    embeddedStyles: function(slide, styleString) {
      if (typeof styleString !== 'string') {
        console.log('Esperava que o metadado "embeddedStyles" tivesse como ' +
          'valor uma string, mas foi passado via arquivo markdown um ' +
          typeof styleString);
      }
      var s = document.createElement('style');
      s.innerHTML = styleString;
      document.head.appendChild(s);
    }
  }, [
    [
      markdownItContainer,
      'figure',
      {
        validate: function(params) {
          return params.trim().match(/^figure.*$/);
        },
        render: function(tokens, idx, options, env, self) {
          // formato:
          // ::: figure .primeira-classe.segunda.terceira background-color: white; color: black;
          // ...conteúdo markdown...
          // :::
          // as classes devem estar "coladas" uma na outra e são opcionais
          // após as classes, é possível definir uma string de estilos, que
          // também é opcional. Se a string de estilos for definida, é
          // necessário definir pelo menos 1 classe (ou então colocar apenas um
          // ponto final sem nome de classe)
          var m = tokens[idx].info.trim().match(/^figure\s+([^\s]*)\s*(.*)?$/),
            className = '',
            styleString = '';

          if (tokens[idx].nesting === 1) {
            // opening tag
            if (!!m && Array.isArray(m)) {
              className = (m[1] || '').trim().replace(/\./g, ' ');
              styleString = (m[2] || '').trim();
            }
            return '<figure class="' + className + '" style="' + styleString + '">\n';
          } else {
            // closing tag
            return '</figure>\n';
          }
        }
      }
    ],
    markdownItAnchor,
    markdownItDefList,
    markdownItAbbr,
    markdownItDecorate
  ]),
  fancy(),
  keys(),
  touch(),
  overview({ insertStyles: false }),
  bullets('.bullet'),
  // bullets('li:not(.bullet-old), .bullet, dt:not(.bullet-old), dd:not(.bullet-old)'),
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
