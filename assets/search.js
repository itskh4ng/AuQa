document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector(".input")
  input.addEventListener("keydown", handleInput)

  function handleInput(e) {
    // We only want the function to run if the key pressed is the Enter key
    if (e.key !== 'Enter') return;

    // Run the formatSearch function on the current value of the input
    const query = formatSearch(input.value)

    // Change the src of the iframe with id 'main-iframe' instead of redirecting the page
    const iframe = document.getElementById('main-iframe');
    iframe.src = query;
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
