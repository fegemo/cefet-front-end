// This plugin adds a class to the presentation parent with the 
// name of the class, from the URL. For example, if the URL is 
// https://example.com/classes/math101, it will add the class "math101" 
// to the presentation parent element
//
// This is useful for applying class-specific styles to the presentation,
// such as different color schemes for different classes.
// 
// The titler plugin requires this plugin to be loaded first, as it uses 
// the class name to set the document title.
module.exports = () => deck => {
  const path = location.pathname;
  const startOfClassName = path.indexOf('/classes/') === -1 ? 0 : path.indexOf('/classes/') + '/classes/'.length;
  const className = path.substring(startOfClassName, path.indexOf('/', startOfClassName));
  
  deck.parent.classList.add(className || 'syllabus');
}
