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
    var selectedGame = getCookie("selectedGame");
    var iframeSrc = getCookie("iframeSrc");

    if (selectedGame) {
        // Set the selected value in the dropdown
        document.getElementById("gamepad").value = selectedGame;

        // Set the iframe src from the cookie
        var iframe = document.getElementById("main-iframe");
        if (iframeSrc) {
            iframe.src = iframeSrc;
        }
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
    var selectedGame = document.getElementById("gamepad").value;
    var iframe = document.getElementById("main-iframe");

    // Save selected option and iframe src to cookies
    saveSelectedOption(selectedGame);

    // Update iframe src based on selected game
    if (selectedGame === "GeForce") {
        iframe.src = "../storage/geforce.html";
    } else if (selectedGame === "Now.GG") {
        iframe.src = "../storage/nowgg.html";
    } else if (selectedGame === "EASYFUN") {
        iframe.src = "../storage/easyfun.html";
    } else if (selectedGame === "Itch.IO") {
        iframe.src = "../storage/itch.html";
    } else if (selectedGame === "1v1.lol") {
        iframe.src = "https://1v1.lol";
    } else if (selectedGame === "CrazyGames") {
        iframe.src = "../storage/crazygames.html";
    } else if (selectedGame === "RetroBowl") {
        iframe.src = "https://game316009.konggames.com/gamez/0031/6009/live/index.html";
    } else if (selectedGame === "CookieClicker") {
        iframe.src = "../storage/cookieclicker.html";
    } else if (selectedGame === "SubwaySurfers") {
        iframe.src = "../storage/subwaysurfers.html";
    } else if (selectedGame === "FruitNinja") {
        iframe.src = "../storage/fruitninja.html";
    }
}

