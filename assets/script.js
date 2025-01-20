document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector(".input");
  input.addEventListener("keydown", handleInput);

  function handleInput(e) {
    if (e.key !== 'Enter') return;
    const query = formatSearch(input.value);
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(query);
  }
});

function formatSearch(query) {
  try {
    return new URL(query).toString();
  } catch (e) {}

  try {
    const url = new URL(`http://${query}`);
    if (url.hostname.includes('.')) return url.toString();
  } catch (e) {}

  return new URL(`https://google.com/search?q=${query}`).toString();
}
