(function(win, doc) {

  "use strict";

  // QRコードを表示する
  if (/qr/.test(location.hash)) {
    var url = "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + getURL(),
        img = doc.getElementById("store-qr-img");

    img.style.background = "#fff center top no-repeat url(" + url + ")";
  }

  function getURL() {
    return location.protocol + "//" + location.hostname + location.pathname;
  }

})(window, document);