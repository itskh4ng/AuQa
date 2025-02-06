document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("main-iframe");
    if (iframe) {
        let observer = new MutationObserver(() => {
            if (iframe.contentWindow) {
                let videos = iframe.contentWindow.document.querySelectorAll("video, source");
                videos.forEach(video => {
                    if (video.src.includes("ngg.lol/apps/frogiee1/videos/loading.mp4")) {
                        video.remove();
                        console.log("Blocked: ngg.lol/apps/frogiee1/videos/loading.mp4");
                    }
                });
            }
        });

        observer.observe(iframe, { attributes: true, childList: true, subtree: true });
    }
});
