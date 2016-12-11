(function(win, doc) {

  "use strict";

  // ページのスクロールを止めるためにtouchmoveを止める

  if (navigator.standalone) {
    doc.body.addEventListener("touchmove", (evt) => {
      evt.preventDefault();
    }, true);
  }

})(window, document);