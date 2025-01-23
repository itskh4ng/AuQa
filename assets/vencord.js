function toggleVencord() {
  // Get the iframe element by ID
  const iframe = document.getElementById('main-iframe');
  
  // Ensure the iframe's document is accessible
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  // Check if the script is already loaded in the iframe
  if (!iframeDoc.getElementById('vencord-script')) {
    // Create a new script element for the iframe
    const script = iframeDoc.createElement('script');
    script.id = 'vencord-script';  // Unique ID for the script element
    script.src = 'https://raw.githubusercontent.com/Vencord/builds/main/Vencord.user.js';
    script.onload = function() {
      console.log('Vencord script loaded and executed inside the iframe!');
    };
    script.onerror = function() {
      console.error('Error loading the Vencord script inside the iframe.');
    };

    // Append the script to the iframe document
    iframeDoc.body.appendChild(script);
  } else {
    console.log('Vencord script is already loaded inside the iframe.');
  }
}

