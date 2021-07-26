const api = require('how-caniuse').howcaniuse

/*  Configure the browsers you want to show here.
    The order defines the order they will appear on the page.

    Browser options are:
    * android   - Android
    * and_ff    - Android Firefox
    * and_chr   - Android Chrome
    * bb        - Blackberry
    * chrome    - Google Chrome
    * firefox   - Mozilla Firefox
    * ie        - Internet Explorer
    * ios_saf   - iOS Safari
    * opera     - Opera
    * op_mini   - Opera Mini
    * op_mob    - Opera Mobile
    * safari    - Apple Safari
*/
const BROWSERS = {
  chrome: 'Chrome',
  firefox: 'Firefox',
  edge: 'Edge',
  opera: 'Opera',
  safari: 'Safari'
}

//  Customise HTML here
let TMPL_TITLE = '<h3>{title}</h3>', // feature title {title}
  TMPL_DESCRIPTION = '<p>Suportado a partir de:</p>', // description to user
  TMPL_DESKTOP_TITLE = '', // desktop header
  TMPL_MOBILE_TITLE = '', // mobile header
  TMPL_SUPPORT_WRAPPER = '<ul class="agents">{items}</ul>', // support wrapper {items}
  TMPL_SUPPORT = '<li title="{browser} - {support}" class="icon-{browsercode} {supportcode}"><span class="version">{version}{prefixed}</span></li>',
  TMPL_PREFIX_NOTE = '<p>* requer prefixo.</p>',
  TMPL_LEGEND = '<ul class="legend"><li>Legenda:</li><li class="y">Sim</li><li class="n">Não</li><li class="a">Parcial</li><li class="p">Polyfill</li></ul>',
  TMPL_FOOTER = '<p class="stats">Dados de <a href="http://caniuse.com/#feat={feature}" target="_blank">caniuse.com</a></p>',
  TMPL_LOADING = '<h2>Carregando</h2>',
  TMPL_ERROR = '<h2>Erro</h2><p>Funcionalidade "{feature}" não encontrada!</p>'


// get feature data based on feature name
function getFeature(featureName = '') {
  featureName = featureName.toLowerCase()

  let support = null
  try {
    support = api.getSupport(featureName)
  } catch (error) {
    // ignore error - the database is probably outdated
    console.info(`The feature ${featureName} was not found on the how-caniuse database.`)
  }
  return support
}

// get the full text description for the support status
function getSupportStatus(key) {
  const status = {
    'y': 'Sim',
    'x': 'Com prefixo',
    'n': 'Não',
    'a': 'Suporte parcial',
    'p': 'Polyfill',
    'u': 'Desconhecido'
  }

  return status[key]
}

function findSupport(browserData) {
  const status = ['y', 'a', 'x', 'p']

  // find what support is available for this browser
  for (let stat of status) {
    if (browserData[stat]) {
      return {
        result: stat,
        prefixed: stat === 'x',
        version: browserData[stat]
      }
    }
  }

  return {
    result: 'n',
    prefixed: false,
    version: 'Não'
  }
}

/* put the data in a more platable format */
function generateResults(feature) {
  const results = {}

  results.title = feature.title // feature name
  results.code = feature.code // feature code?
  results.agents = []

  for (let browser of Object.keys(BROWSERS)) {

    if (feature.browsers[browser]) {

      const support = findSupport(feature.browsers[browser])

      results.agents.push({
        'browsercode': browser,
        'prefixed': support.prefixed,
        'supportcode': support.result,
        'support': getSupportStatus(support.result),
        'title': BROWSERS[browser],
        'type': 'desktop',
        'version': support.version
      })
    }
  }

  return results
}


function generateHtml(results) {

  let html = '',
    resultHtml = '',
    desktopHtml = '',
    mobileHtml = '',
    prefixes = false,
    result = {},
    i = 0,
    l = 0

  resultHtml = TMPL_TITLE.replace('{title}', results.title)
  resultHtml += TMPL_DESCRIPTION

  for (i = 0, l = results.agents.length; i < l; i++) {
    result = results.agents[i] // simply things

    // we need to show that prefix notice, captain
    if (result.prefixed) {
      prefixes = true
    }

    html = TMPL_SUPPORT.replace(/\{browsercode\}/g, result.browsercode)
      .replace(/\{prefixed\}/g, (result.prefixed === true) ? '*' : '')
      .replace(/\{supportcode\}/g, result.supportcode)
      .replace(/\{support\}/g, result.support)
      .replace(/\{browser\}/g, result.title)
      .replace(/\{version\}/g, result.version)

    if (result.type === 'desktop') {
      desktopHtml += html
    } else if (result.type === 'mobile') {
      mobileHtml += html
    }
  }

  // only show if we are including desktop browsers
  if (desktopHtml !== '') {
    resultHtml += TMPL_DESKTOP_TITLE
    resultHtml += TMPL_SUPPORT_WRAPPER.replace(/\{items\}/g, desktopHtml)
  }

  // only show if we are including mobile browsers
  if (mobileHtml !== '') {
    resultHtml += TMPL_MOBILE_TITLE
    resultHtml += TMPL_SUPPORT_WRAPPER.replace(/\{items\}/g, mobileHtml)
  }

  if (prefixes) {
    resultHtml += TMPL_PREFIX_NOTE
  }

  resultHtml += TMPL_LEGEND
  resultHtml += TMPL_FOOTER.replace(/\{feature\}/g, results.featureCode)

  return resultHtml
}

function generate() {
  let canIUseElements = document.querySelectorAll('.caniuse')

  for (let el of canIUseElements) {
    const featureCode = el.getAttribute('data-feature') || 'unknown'
    let feature = getFeature(featureCode)

    if (feature) {
      if (Array.isArray(feature)) {
        feature = feature[0]
      }
      feature.code = featureCode

      const result = generateResults(feature)

      result.featureCode = featureCode
      el.innerHTML = generateHtml(result)
    } else {
      el.innerHTML = TMPL_ERROR.replace(/\{feature\}/g, featureCode)
    }
  }
}

function showLoading() {
  let canIUseElements = document.querySelectorAll('.caniuse')

  for (let el of canIUseElements) {
    el.innerHTML = TMPL_LOADING
  }
}

function populate() {
  showLoading()
  generate()
}

populate()
