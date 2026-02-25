// This plugin sets the document title to the text content of the 
// first heading element (h1, h2, h3, h4, h5, or h6) found from the parent 
// element of the deck. 
// 
// It also looks for a second heading element to use as a subtitle, which is
// as an h1, h2...h6 on the same section (ie, slide), if present.
//
// The filterToActivate parameter can be used to specify a CSS selector to
// determine whether the plugin should be activated or not. For example, if
// filterToActivate is set to ':not(.syllabus)', the plugin will only be 
// activated if the presentation parent does not have the class "syllabus".
// 
// This is useful for giving each slide a unique 
// title based on its content.
module.exports = (filterToActivate, suffix = '') => deck => {
  const firstSlideEl = deck.slides[0]
  if (filterToActivate && !deck.parent.matches(filterToActivate)) {
    return
  }
  const htmlTitleSelector = 'h1, h2, h3, h4, h5, h6'
  const titleEl = firstSlideEl.querySelector(htmlTitleSelector)
  if (titleEl) {  
    const otherTitleEls = firstSlideEl.querySelectorAll(htmlTitleSelector)
    let subtitleEl = null
    for (const el of otherTitleEls || []) {
      if (el !== titleEl) {
        subtitleEl = el
        break
      }
    }

    let pageTitle = titleEl.textContent.trim()
    if (subtitleEl) {
      pageTitle += ' - '
      pageTitle += subtitleEl.textContent.trim()
    }
    pageTitle += suffix

    document.title = pageTitle
  }
}
