(function(win, doc) {

  "use strict";

  if (!/iphone|ipop|ipad/.test(navigator.userAgent.toLowerCase())) {
    location.hash = "app";
  }

  doc.body.dataset.app = !!navigator.standalone || /app/.test(location.hash);

})(window, document);