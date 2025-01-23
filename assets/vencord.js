function toggleVencord() {
  const iframe = document.getElementById('main-iframe');
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  if (!iframeDoc.getElementById('vencord-script')) {
    const script = iframeDoc.createElement('script');
    script.id = 'vencord-script';
    script.src = 'https://raw.githubusercontent.com/Vencord/builds/main/Vencord.user.js';
    script.onload = function() {
      console.log('Success.');
    }
    script.onerror = function() {
      console.error('Error.');
    };
    iframeDoc.body.appendChild(script);
  } else {
    console.log('Vencord Loaded.');
  }
}
