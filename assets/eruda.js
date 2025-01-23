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
        devToolsLoaded = true; // Mark as loaded
      };

      innerDoc.head.appendChild(erudaScript);
    } else {
      if (devToolsLoaded) {
        eruda.hide();
        devToolsLoaded = false;
      } else {
        eruda.show();
        devToolsLoaded = true;
      }
    }
  } else {
    console.error('Failed.');
  }
}
