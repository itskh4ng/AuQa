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
        devToolsLoaded = true;
      };

      innerDoc.head.appendChild(erudaScript);
    } else {
      if (eruda.style.display === 'none') {
        eruda.style.display = 'block';
      } else {
        eruda.style.display = 'none';
      }
    }
  } else {
    console.error('Failed.');
  }
}
