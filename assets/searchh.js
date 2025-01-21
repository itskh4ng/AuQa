document.addEventListener('DOMContentLoaded', () => {
        // Select the input element
        const input = document.getElementById("search-input");
        const iframe = document.getElementById("main-iframe");

        // Check if the input element exists
        if (!input || !iframe) {
          console.error("Required elements not found in the DOM.");
          return;
        }

        // Add an event listener for the 'keydown' event
        input.addEventListener("keydown", (e) => {
          // Trigger only when the Enter key is pressed
          if (e.key === 'Enter') {
            const query = formatSearch(input.value); // Format the input value
            iframe.src = __uv$config.prefix + __uv$config.encodeUrl(query); // Update the iframe's src
          }
        });

        // Function to format the search query or convert it to a valid URL
        function formatSearch(query) {
          try {
            return new URL(query).toString(); // If the query is already a valid URL
          } catch (e) { }

          try {
            const url = new URL(`http://${query}`); // Add protocol if missing
            if (url.hostname.includes('.')) return url.toString();
          } catch (e) { }

          // Default to a search query if the input isn't a valid URL
          return new URL(`https://search.brave.com/search?q=${query}`).toString();
        }
      });
// UV configuration (replace encoding logic as needed)
      const __uv$config = {
        prefix: "/uv/",
        encodeUrl: (url) => btoa(url), // Replace this with your encoding method if different
      };
      
