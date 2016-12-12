(function(win, doc) {

  "use strict";

  var ua = navigator.userAgent.toLowerCase();

  if (!/iphone|ipop|ipad/.test(ua)) {
    if (/android/.test(ua)) {
      location.hash = "app";
    } else {
      location.hash = "store-qr";
    }
  }

  doc.body.dataset.app = !!navigator.standalone || /app/.test(location.hash);

})(window, document);