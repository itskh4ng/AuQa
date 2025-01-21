document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById("search-input");
  const iframe = document.getElementById("main-iframe");
  if (!input || !iframe) {
          console.error("Required elements not found in the DOM.");
          return;
        }
  if (!input || !iframe) {
          console.error("Required elements not found in the DOM.");
          return;
        }

        // Add an event listener for the 'keydown' event
        input.addEventListener("keydown", (e) => {
          // Trigger only when the Enter key is pressed
          if (e.key === 'Enter') {
            const query = formatSearch(input.value);

    // Redirect to         [   uv prefix    ] + [   encoded search query   ]
    iframe.src = __uv$config.prefix + __uv$config.encodeUrl(query)
  }
})

function formatSearch(query) {
  // This function turns the inputted value into a Google search if it's not a normal URL
  try {
    return new URL(query).toString()
  } catch (e) { }

  try {
    const url = new URL(`http://${query}`)
    if (url.hostname.includes('.')) return url.toString()
  } catch (e) { }

  return new URL(`https://search.brave.com/search?q=${query}`).toString()
}
