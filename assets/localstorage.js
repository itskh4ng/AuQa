function setCookie(c, e, t) {
    var d = new Date();
    d.setTime(d.getTime() + t * 24 * 60 * 60 * 1000); // Set expiration in days
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

function saveSelectedOption(e) {
    // Save the selected option and iframe src in cookies for 7 days
    setCookie("selectedGame", e, 7);
    setCookie("iframeSrc", document.getElementById("main-iframe").src, 7);
}

function loadSelectedOption() {
    var e = getCookie("selectedGame");
    var t = getCookie("iframeSrc");
    
    if (e) {
        var r = document.getElementById("gamepad");
        var n = document.getElementById("main-iframe");
        r.value = e;
        n.src = t;
    }
}

window.onload = function() {
    loadSelectedOption();
    setInterval(function() {
        saveSelectedOption(document.getElementById("gamepad").value);
    }, 10);
};
