async function checkStatusAndUpdateIframe() {
    try {
        const response = await fetch('../assets/switch.json');
        if (!response.ok) {
            alert("Failed to load switch.json");
            return;
        }
        const data = await response.json();
        if (data.status === "off") {
            const iframe = document.querySelector('#main-iframe');
            if (iframe && iframe.src === "https://staging.bloxd.io") {
                iframe.src = "../assets/loading.html";
            }
        }
    } catch (error) {
        console.error("Error checking status:", error);
    }
}

setInterval(checkStatusAndUpdateIframe, 1000);
