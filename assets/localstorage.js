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

// Save the selected game and iframe src to cookies for 7 days
function saveSelectedOption(e) {
    setCookie("selectedGame", e, 7);  // Save selected game for 7 days
    setCookie("iframeSrc", document.getElementById("main-iframe").src, 7);  // Save iframe src for 7 days
}

// Load the selected game and iframe src from cookies
function loadSelectedOption() {
    var e = getCookie("selectedGame");
    var t = getCookie("iframeSrc");
    
    if (e) {
        var r = document.getElementById("gamepad");
        var n = document.getElementById("main-iframe");
        r.value = e;  // Set the dropdown value
        n.src = t;    // Set the iframe src from the cookie
    }
}

// On page load, load saved values and set periodic saving of selected option
window.onload = function() {
    loadSelectedOption();  // Load selected game and iframe src on page load
    
    // Save selected option and iframe src every 10 milliseconds
    setInterval(function() {
        saveSelectedOption(document.getElementById("gamepad").value);
    }, 10);
};

// Handle the dropdown change event and update iframe src
function displaySelectedOption() {
    saveSelectedOption(document.getElementById("gamepad").value);
    var e = document.getElementById("gamepad").value;
    var t = document.getElementById("main-iframe");

    if (e === "GeForce") {
        t.src = "../storage/geforce.html";
    } else if (e === "Now.GG") {
        t.src = "../storage/nowgg.html";
    } else if (e === "EASYFUN") {
        t.src = "../storage/easyfun.html";
    } else if (e === "Itch.IO") {
        t.src = "../storage/itch.html";
    } else if (e === "1v1.lol") {
        t.src = "https://1v1.lol";
    } else if (e === "CrazyGames") {
        t.src = "../storage/crazygames.html";
    } else if (e === "RetroBowl") {
        t.src = "https://game316009.konggames.com/gamez/0031/6009/live/index.html";
    } else if (e === "CookieClicker") {
        t.src = "../storage/cookieclicker.html";
    } else if (e === "SubwaySurfers") {
        t.src = "../storage/subwaysurfers.html";
    } else if (e === "FruitNinja") {
        t.src = "../storage/fruitninja.html";
    }
}

