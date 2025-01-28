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
    var iframeSrc = document.getElementById("main-iframe").src;
    setCookie("iframeSrc", iframeSrc, 7);
}

function loadIframeSrc() {
    var iframeSrc = getCookie("iframeSrc");
    if (iframeSrc) {
        document.getElementById("main-iframe").src = iframeSrc; 
    }
}

window.onload = function() {
    loadIframeSrc();  
    setInterval(saveIframeSrc, 10);
};
