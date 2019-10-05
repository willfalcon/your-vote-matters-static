(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function polyfills() {
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;

        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }
  }

  polyfills();
  var links = document.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      gtag('event', 'Link Click', {
        value: link.href
      });
      console.log(link.href);
    });
  });

}));
//# sourceMappingURL=bundle.js.map
