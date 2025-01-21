 document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("search-input");
    const iframe = document.getElementById("main-iframe");

    if (!input || !iframe) {
      console.error("Required elements not found in the DOM.");
      return;
    }

    input.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        const query = formatSearch(input.value); 

        iframe.src = __uv$config.prefix + __uv$config.encodeUrl(query);
      }
    });
  });

  function formatSearch(query) {
    try {
      return new URL(query).toString();
    } catch (e) { }

    try {
      const url = new URL(`http://${query}`);
      if (url.hostname.includes('.')) return url.toString();
    } catch (e) { }

    return new URL(`https://search.brave.com/search?q=${query}`).toString();
  }
