(function(win, doc) {

  "use strict";

  // リロードボタン / データクリアボタンにイベントを振る
  var btnReload  = doc.getElementById("app-btnReload"),
      btnClear   = doc.getElementById("app-btnClear");

  btnReload.addEventListener("touchend", function() {
    location.replace("?date=" + Date.now());
  }, false);

  btnClear.addEventListener("touchend", function() {
    localStorage.clear();
  }, false);

})(window, document);