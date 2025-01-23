var devToolsLoaded = false;

function devTools() {
  var siteIframe = document.getElementById('main-iframe');

  if (siteIframe) {
    var innerDoc = siteIframe.contentDocument || siteIframe.contentWindow.document;
    var eruda = innerDoc.getElementById('eruda');

    if (!eruda) {
      var erudaScript = document.createElement('script');
      erudaScript.src = "//cdn.jsdelivr.net/npm/eruda";

      erudaScript.onload = function() {
        var initScript = document.createElement('script');
        initScript.innerHTML = `
          eruda.init(); 
          eruda.show();
        `;
        innerDoc.head.appendChild(initScript);
      };

      innerDoc.head.appendChild(erudaScript);
    } else {
      var hideScript = document.createElement('script');
      hideScript.innerHTML = `
        eruda.hide();
      `;
      innerDoc.head.appendChild(hideScript);
    }
  } else {
    console.error('Failed to access the iframe.');
  }
}
