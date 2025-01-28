function setCookie(c, e, t) {
    var d = new Date();
    d.setTime(d.getTime() + t * 24 * 60 * 60 * 1000);
    document.cookie = c + "=" + e + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(c) {
    var name = c + "=";
    var decodedCookie = document.cookie.split(";");
    for (var i = 0; i < decodedCookie.length; i++) {
        var x = decodedCookie[i].trim();
        if (x.indexOf(name) == 0) return x.substring(name.length, x.length);
    }
    return "";
}

function saveIframeSrc() {
    var iframe = document.getElementById("main-iframe");
    if (iframe && iframe.contentWindow) {
        setCookie("iframeSrc", iframe.src, 7);
    }
}

function loadIframeSrc() {
    var iframeSrc = getCookie("iframeSrc");
    if (iframeSrc) {
        var iframe = document.getElementById("main-iframe");
        if (iframe) iframe.src = iframeSrc;
    }
}

window.onload = function() {
    loadIframeSrc();
    var iframe = document.getElementById("main-iframe");
    if (iframe) {
        iframe.onload = function() {
            setInterval(saveIframeSrc, 100);
        };
    }
};
