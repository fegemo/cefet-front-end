var cheet = require('cheet.js');

module.exports = function() {
  function toggleResolution() {
    var resolutions = document.querySelectorAll('.resolution');
    [].forEach.call(resolutions, function(el) {
      el.classList.toggle('resolution-shown');
    });
  }

  cheet('i d d q d', toggleResolution);
};
