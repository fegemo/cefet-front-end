// markdownit plugins
const markdownItAnchor = require('markdown-it-anchor'),
  markdownItContainer = require('markdown-it-container'),
  markdownItDecorate = require('markdown-it-decorate'),
  markdownItDefList = require('markdown-it-deflist'),
  markdownItEmoji = require('markdown-it-emoji'),
  markdownItAbbr = require('markdown-it-abbr');


const config = {
    backdrop: (slide, value) => {
      slide.setAttribute('data-bespoke-backdrop', value);
    },

    scripts: (slide, url) => {
      const placeToPutScripts = document.body;
      url = !Array.isArray(url) ? [url] : url;

      const loadScriptChain = i => {
        const s = document.createElement('script');
        s.src = url[i];
        if (i < url.length - 1) {
          s.addEventListener('load', () => loadScriptChain(i+1));
        }
        placeToPutScripts.appendChild(s);
      }
      loadScriptChain(0);
    },

    styles: (slide, value) => {
      const placeToPutStyles = document.head;
      value = !Array.isArray(value) ? [value] : value;
      value.forEach(url => {
        const l = document.createElement('link');
        l.rel = 'stylesheet';
        l.href = url;
        placeToPutStyles.appendChild(l);
      });
    },

    embeddedStyles: (slide, styleString) => {
      if (typeof styleString !== 'string') {
        console.log('Esperava que o metadado "embeddedStyles" tivesse como ' +
          'valor uma string, mas foi passado via arquivo markdown um ' +
          typeof styleString);
      }
      const s = document.createElement('style');
      s.innerHTML = styleString;
      document.head.appendChild(s);
    },

    elementStyles: (slideEl, elementsAndTheirStyles) => {
      Object.keys(elementsAndTheirStyles).forEach(selector => {
        Array.from(slideEl.querySelectorAll(selector))
          .forEach(el => el.setAttribute('style', elementsAndTheirStyles[selector]));
      });
    },

    slideHash: (slide, value) => slide.setAttribute('data-bespoke-hash', value),

    layout: (slide, value) => slide.classList.add('layout-' + value),

    state: (slide, value) => slide.setAttribute('data-bespoke-state', value),

    classes: (slide, values) => values.split().forEach(cl => slide.classList.add(cl)),

    preventSelection: (slide, unselectableElementsSelector) => {
      const els = slide.querySelectorAll(unselectableElementsSelector);
      els.forEach(el => {
        el.onselectstart = () => false;
        el.onmousedown = () => false;
        el.setAttribute('unselectable', 'on');
        el.style.userSelect = 'none';
      });
    },

    fullScreenElement: (slide, elementSelector) => {
      const el = slide.querySelector(elementSelector);
      const requestFullScreenName = document.documentElement.requestFullScreen ?
        'requestFullScreen' : `${['webkit', 'moz'].find(p => document.documentElement[`${p}RequestFullScreen`])}RequestFullScreen`;
      const exitFullScreenName = document.exitFullScreen ?
        'exitFullScreen' : `${['webkitExit', 'webkitCancel', 'mozExit', 'mozCancel']
          .find(p => document[`${p}FullScreen`])}FullScreen`;

      if (requestFullScreenName && exitFullScreenName) {
        this.on('activate', e =>{
          if (e.slide === slide) {
            el[requestFullScreenName]();
          }
        });
        this.on('deactivate', e => {
          if (e.slide === slide) {
            document[exitFullScreenName]();
          }
        });
      }
    },

    fullPageElement: (slide, elementSelector) => {
      const el = slide.querySelector(elementSelector);
      el.style.width = window.getComputedStyle(slide).width;
      el.style.height = window.getComputedStyle(slide).height;
      el.style.position = 'absolute';
      el.style.left = el.style.top = '0';
      // fix for chrome hiding the video controls behind (or under) the video
      // from: https://stackoverflow.com/questions/22217084/video-tag-at-chrome-overlays-on-top
      el.style.backfaceVisibility = 'hidden';
      el.style.transform = 'translateZ(0)';
    },

    playMediaOnActivation: function(slide, { selector, delay = '1500'}) {
      const els = slide.querySelectorAll(selector);
      this.on('activate', e => {
        if (e.slide === slide) {
          setTimeout(() => {
            Array.from(els).forEach(e => e.play ? e.play() : null);
          }, delay);
        }
      });
      this.on('deactivate', e => {
        if (e.slide === slide) {
          setTimeout(() => {
            Array.from(els).forEach(e => e.pause ? e.pause() : null);
          }, delay);
        }
      });
    }
};

const extensions = [
  [
    markdownItContainer,
    'figure',
    {
      validate: params => params.trim().match(/^figure.*$/),

      render: (tokens, idx, options, env, self) => {
        // formato:
        // ::: figure .primeira-classe.segunda.terceira background-color: white; color: black;
        // ...conteúdo markdown...
        // :::
        // as classes devem estar "coladas" uma na outra e são opcionais
        // após as classes, é possível definir uma string de estilos, que
        // também é opcional. Se a string de estilos for definida, é
        // necessário definir pelo menos 1 classe (ou então colocar apenas um
        // ponto final sem nome de classe)
        let m = tokens[idx].info.trim().match(/^figure\s+([^\s]*)\s*(.*)?$/),
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
  [
    markdownItContainer,
    'result',
    {
      validate: params => params.trim().match(/^result.*$/),

      render: (tokens, idx, options, env, self) => {
        // formato:
        // ::: result .primeira-classe.segunda.terceira background-color: white; color: black;
        // ...conteúdo markdown...
        // :::
        // as classes devem estar "coladas" uma na outra e são opcionais
        // após as classes, é possível definir uma string de estilos, que
        // também é opcional. Se a string de estilos for definida, é
        // necessário definir pelo menos 1 classe (ou então colocar apenas um
        // ponto final sem nome de classe)
        let m = tokens[idx].info.trim().match(/^result\s+([^\s]*)\s*(.*)?$/),
          className = '',
          styleString = '';

        if (tokens[idx].nesting === 1) {
          // opening tag
          if (!!m && Array.isArray(m)) {
            className = (m[1] || '').trim().replace(/\./g, ' ');
            styleString = (m[2] || '').trim();
          }
          return '<div class="result ' + className + '" style="' + styleString + '" data-before="Resultado">\n';
        } else {
          // closing tag
          return '</div>\n';
        }
      }
    }
  ],
  [
    markdownItContainer,
    'did-you-know',
    {
      validate: params => params.trim().match(/^did\-you\-know.*$/),

      render: (tokens, idx, options, env, self) => {
        // formato:
        // ::: did-you-know .primeira-classe.segunda.terceira background-color: white; color: black;
        // ...conteúdo markdown...
        // :::
        // as classes devem estar "coladas" uma na outra e são opcionais
        // após as classes, é possível definir uma string de estilos, que
        // também é opcional. Se a string de estilos for definida, é
        // necessário definir pelo menos 1 classe (ou então colocar apenas um
        // ponto final sem nome de classe)
        let m = tokens[idx].info.trim().match(/^did\-you\-know\s+([^\s]*)\s*(.*)?$/),
          className = '',
          styleString = '';

        if (tokens[idx].nesting === 1) {
          // opening tag
          if (!!m && Array.isArray(m)) {
            className = (m[1] || '').trim().replace(/\./g, ' ');
            styleString = (m[2] || '').trim();
          }
          return '<div class="did-you-know ' + className + '" style="' + styleString + '" data-before="Você Sabia??">\n';
        } else {
          // closing tag
          return '</div>\n';
        }
      }
    }
  ],
  [
    markdownItContainer,
    'gallery',
    {
      validate: (params) => params.trim().match(/^gallery.*$/),
      render: (tokens, idx, options, env, self) => {
        // formato:
        // ::: gallery .primeira-classe.segunda.terceira background-color: white; color: black;
        // - [![Descricao](imagem)](link)
        // - [![Descricao](imagem)](link)
        // :::
        // as classes devem estar "coladas" uma na outra e são opcionais
        // após as classes, é possível definir uma string de estilos, que
        // também é opcional. Se a string de estilos for definida, é
        // necessário definir pelo menos 1 classe (ou então colocar apenas um
        // ponto final sem nome de classe)
        const m = tokens[idx].info.trim().match(/^gallery\s+([^\s]*)\s*(.*)?$/);
        let  className = '',
          styleString = '';

        if (tokens[idx].nesting === 1) {
          // opening tag
          if (!!m && Array.isArray(m)) {
            className = (m[1] || '').trim().replace(/\./g, ' ');
            styleString = (m[2] || '').trim();
          }
          return `<div class="gallery ${className}" style="${styleString}">\n`;
        } else {
          // closing tag
          return '</div>\n';
        }
      }
    }
  ],
  markdownItDefList,
  markdownItAbbr,
  markdownItDecorate,
  markdownItEmoji
];

exports.config = config;
exports.extensions = extensions;
