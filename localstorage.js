function setCookie(c, e, t) {
    // Set cookie with the specified name, value, and expiration in days
    var d = new Date();
    d.setTime(d.getTime() + t * 24 * 60 * 60 * 1000); // Set expiration time (in days)
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
    // Save the selected game and iframe src to cookies for 7 days
    setCookie("selectedGame", e, 7);
    setCookie("iframeSrc", document.getElementById("main-iframe").src, 7);
}

function loadSelectedOption() {
    var e = getCookie("selectedGame");
    var t = getCookie("iframeSrc");
    
    if (e) {
        var r = document.getElementById("gamepad");
        var n = document.getElementById("main-iframe");
        r.value = e; // Set the dropdown value
        n.src = t;   // Set the iframe src from the cookie
    }
}

window.onload = function() {
    // Load selected option and iframe src on page load
    loadSelectedOption();
    
    // Save the selected option and iframe src every 10 milliseconds
    setInterval(function() {
        saveSelectedOption(document.getElementById("gamepad").value);
    }, 10);
};
