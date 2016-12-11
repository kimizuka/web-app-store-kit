(function(win, doc) {

  "use strict";

  if (doc.body.dataset.app === "true") {
    return;
  }

  /* ストアで実行したい内容を書く */

  var APP_NAME = "lifting";

  doc.title = APP_NAME;

})(window, document);