// Function to load the switch status from the JSON file
function loadSwitchStatus() {
  fetch('../assets/switch.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      alert("Switch JSON loaded: " + JSON.stringify(data));  // Alerting the JSON content
      const status = data.status;

      if (status === "off") {
        handleIframe();
      } else {
        alert("Status is ON, no changes needed.");
      }
    })
    .catch(error => alert('Error loading switch.json: ' + error));
}

// Function to check the iframe and change the source if necessary
function handleIframe() {
  const iframe = document.getElementById("main-iframe");

  if (iframe) {
    const iframeSrc = iframe.getAttribute("src");
    alert("Current iframe src: " + iframeSrc);  // Alerting the current iframe src

    // Check if the iframe src contains 'staging.bloxd.io'
    if (iframeSrc.includes("staging.bloxd.io")) {
      alert("Iframe src contains 'staging.bloxd.io', changing to loading.html");  // Alerting the change
      iframe.setAttribute("src", "../assets/loading.html");
    } else {
      alert("Iframe src doesn't match 'staging.bloxd.io'");  // Alerting if no change happens
    }
  } else {
    alert("Iframe not found.");  // Alerting if iframe is not found
  }
}

// Call the loadSwitchStatus function every second (1000 milliseconds)
setInterval(loadSwitchStatus, 1000);
