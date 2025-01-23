var adBlockScriptLoaded = false; // Keeps track of whether the ad block script is loaded

  function adBlock() {
    var siteIframe = document.getElementById('main-iframe');
    
    // Ensure iframe is loaded before proceeding
    if (siteIframe && siteIframe.contentDocument) {
      var innerDoc = siteIframe.contentDocument || siteIframe.contentWindow.document;
      
      // Toggle ad blocking on/off
      if (adBlockScriptLoaded) {
        // If ad blocking is already active, remove the script
        var existingScript = innerDoc.querySelector('script#adBlockScript');
        if (existingScript) {
          existingScript.remove();
        }

        adBlockScriptLoaded = false; // Mark the adBlock as disabled
        console.log('Ad Blocker Disabled');
      } else {
        // If ad blocking is not active, inject the script
        var adBlockScript = document.createElement('script');
        adBlockScript.id = 'adBlockScript';
        adBlockScript.innerHTML = `
          (function() {
            'use strict';
            let sites = {
              '.*\.?fandom\.com': {
                remove: ['.top-ads-container','.bottom-ads-container','#WikiaBar','.notifications-placeholder','.gpt-ad'],
                interaction: true,
                timeout: 2000,
                trueRemove: true
              }
            };

            let hostname = document.location.hostname;
            let interval = null;
            let loaded = false;

            function cleanup() {
              console.log("Running cleanup...");
              if(sites[hostname].interaction) {
                document.body.dispatchEvent(new MouseEvent('mousemove'));
              }

              if(sites[hostname].remove) {
                let selectors = sites[hostname].remove;
                selectors.forEach(function(selector) {
                  let elements = document.querySelectorAll(selector);
                  elements.forEach(function(elem) {
                    if (!sites[hostname].trueRemove) {
                      elem.style.visibility = 'hidden';
                      elem.style.width = '1px';
                      elem.style.height = '1px';
                      elem.style.overflow = 'hidden';
                      elem.style.opacity = 0;
                    } else {
                      elem.remove();
                    }
                  });
                });
              }

              if(sites[hostname].background) {
                document.body.style.background = sites[hostname].background;
                document.body.style.overflow = 'scroll';
                document.body.style.position = 'static';
              }

              if(sites[hostname].click) {
                let selectors = sites[hostname].click;
                selectors.forEach(function(selector) {
                  let element = document.querySelector(selector);
                  if(!!element) {
                    element.click();
                  }
                });
              }

              if(sites[hostname].antiVignette && window.location.hash && window.location.hash == "#google_vignette") {
                window.location.href = window.location.href.split("#")[0];
              }
            }

            if(Object.keys(sites).indexOf(hostname) >= 0) {
              let timeout = 0;
              if(sites[hostname].timeout) {
                timeout = sites[hostname].timeout;
              }

              window.setTimeout(function(){
                cleanup();
              }, timeout);

              if(sites[hostname].interval && !interval) {
                interval = window.setInterval(function(){
                  cleanup();
                }, sites[hostname].interval);
              }

              if(sites[hostname].onChange && !loaded) {
                loaded = true;
                window.addEventListener('locationchange', function () {
                  window.setTimeout(function(){
                    cleanup();
                  }, timeout);
                });
              }
            }
          })();
        `;
        innerDoc.head.appendChild(adBlockScript);

        adBlockScriptLoaded = true; // Mark the adBlock as enabled
        console.log('Ad Blocker Enabled');
      }
    } else {
      console.error('Failed to access the iframe or iframe content is not ready.');
    }
  }
