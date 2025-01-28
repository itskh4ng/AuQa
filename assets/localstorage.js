// Set cookie with the specified name, value, and expiration in days
function setCookie(c, e, t) {
    var d = new Date();
    d.setTime(d.getTime() + t * 24 * 60 * 60 * 1000); // Set expiration time (in days)
    document.cookie = c + "=" + e + ";expires=" + d.toUTCString() + ";path=/";
}

// Get cookie value by name
function getCookie(c) {
    var name = c + "=";
    var decodedCookie = document.cookie.split(";");
    for (var i = 0; i < decodedCookie.length; i++) {
        var x = decodedCookie[i].trim();
        if (x.indexOf(name) == 0) return x.substring(name.length, x.length);
    }
    return "";
}

// Save the iframe src to cookies for 7 days
function saveIframeSrc() {
    var iframeSrc = document.getElementById("main-iframe").src;
    setCookie("iframeSrc", iframeSrc, 7);  // Save iframe src for 7 days
}

// Load the iframe src from cookies
function loadIframeSrc() {
    var iframeSrc = getCookie("iframeSrc");
    if (iframeSrc) {
        document.getElementById("main-iframe").src = iframeSrc;  // Set the iframe src from the cookie
    }
}

// On page load, load saved iframe src and set periodic saving of iframe src
window.onload = function() {
    loadIframeSrc();  // Load iframe src from cookie on page load
    
    // Save iframe src every 10 milliseconds
    setInterval(saveIframeSrc, 10);
};
