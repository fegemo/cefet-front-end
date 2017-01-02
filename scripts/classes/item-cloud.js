'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var CloudItem = function () {
    function CloudItem(text) {
      _classCallCheck(this, CloudItem);

      this.text = text;
      this.color = Math.round(Math.random() * 155 + 100);
      this.size = Math.random() * 150 + 50;
    }

    _createClass(CloudItem, [{
      key: 'render',
      value: function render() {
        this.el = document.createElement('span');
        this.el.innerHTML = this.text;
        this.el.style.fontSize = this.size + '%';
        this.el.style.color = 'rgb(' + this.color + ', ' + this.color + ', ' + this.color + ')';
        this.el.classList.add('clouditem');
        this.hasBeenPositenedRelatively = false;
        return this.el;
      }
    }]);

    return CloudItem;
  }();

  var Cloud = function () {
    function Cloud(el) {
      _classCallCheck(this, Cloud);

      this.el = el;
      this.el.classList.add('itemcloud');
      this.textItems = this.el.innerHTML.split('\n-');
      this.buildCloudItems();
    }

    _createClass(Cloud, [{
      key: 'buildCloudItems',
      value: function buildCloudItems() {
        this.el.innerHTML = '';
        this.items = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.textItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var text = _step.value;

            text = text.trim();
            if (text !== '') {
              var newItem = new CloudItem(text);
              this.items.push(newItem);
              this.el.appendChild(newItem.render());
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }]);

    return Cloud;
  }();

  var itemCloudSlides = document.querySelectorAll('[data-state="itemcloud"]');

  [].forEach.call(itemCloudSlides, function (el) {
    new Cloud(el);
  });
})();
