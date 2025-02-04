// Function to load the switch status from the JSON file
function loadSwitchStatus() {
  fetch('../assets/switch.json')
    .then(response => response.json())
    .then(data => {
      const status = data.status;

      if (status === "off") {
        handleIframe();
      }
    })
    .catch(error => console.error('Error loading switch.json:', error));
}

// Function to check the iframe and change the source if necessary
function handleIframe() {
  const iframe = document.getElementById("main-iframe");

  if (iframe) {
    const iframeSrc = iframe.getAttribute("src");

    // Check if the iframe src contains 'staging.bloxd.io'
    if (iframeSrc.includes("staging.bloxd.io")) {
      iframe.setAttribute("src", "../assets/loading.html");
    }
  }
}

// Call the loadSwitchStatus function every second (1000 milliseconds)
setInterval(loadSwitchStatus, 1000);
