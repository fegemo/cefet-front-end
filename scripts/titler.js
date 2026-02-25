// This plugin sets the document title to the text content of the 
// first heading element (h1, h2, h3, h4, h5, or h6) found from the parent 
// element of the deck. This is useful for giving each slide a unique 
// title based on its content.
module.exports = () => deck => {
  const title = deck.parent.querySelector('h1, h2, h3, h4, h5, h6')
  if (title) {
    document.title = title.textContent
  }
}
