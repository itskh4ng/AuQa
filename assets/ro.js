document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("main-iframe");
    if (iframe) {
        let observer = new MutationObserver(() => {
            if (iframe.contentWindow) {
                let videos = iframe.contentWindow.document.querySelectorAll("video, source");
                videos.forEach(video => {
                    if (video.src.includes("hvtr%3A-%2Flge.non%2Fcprs-fpoeige3%2Ftifems-lmafilg%2Cmr4")) {
                        video.remove();
                        console.log("Blocked: ngg.lol/apps/frogiee1/videos/loading.mp4");
                    }
                });
            }
        });

        observer.observe(iframe, { attributes: true, childList: true, subtree: true });
    }
});
