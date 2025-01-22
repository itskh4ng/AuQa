var devToolsLoaded = false;

function devTools() {
  var siteIframe = document.getElementById('main-iframe');
  
  if (siteIframe) {
    // Access the iframe's document
    var innerDoc = siteIframe.contentDocument || siteIframe.contentWindow.document;
    
    // Check if Eruda is already present
    var eruda = innerDoc.getElementById('eruda');

    // If Eruda isn't already loaded, inject the script
    if (!devToolsLoaded) {
      if (!eruda) {
        // Create the Eruda script element
        var erudaScript = document.createElement('script');
        erudaScript.src = "//cdn.jsdelivr.net/npm/eruda";
        
        // When the script loads, initialize Eruda in the iframe
        erudaScript.onload = function() {
          var initScript = document.createElement('script');
          initScript.innerHTML = "eruda.init();eruda.show();";
          innerDoc.head.appendChild(initScript);
        };

        // Append the Eruda script to the iframe's document
        innerDoc.head.appendChild(erudaScript);
      }
    } else {
      // If Eruda is loaded, remove it
      if (eruda) {
        eruda.remove();
      }
    }
    
    // Toggle the devToolsLoaded state
    devToolsLoaded = !devToolsLoaded;
  } else {
    console.error('Failed to access the iframe.');
  }
}

// Call devTools function periodically to check and inject if needed
document.addEventListener('DOMContentLoaded', function() {
  setInterval(devTools, 1000);  // Adjust the interval as necessary
});
