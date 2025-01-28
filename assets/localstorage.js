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
function saveSelectedOption() {
    var selectedGame = document.getElementById("gamepad").value;
    var iframeSrc = document.getElementById("main-iframe").src;

    setCookie("selectedGame", selectedGame, 7);  // Save selected game for 7 days
    setCookie("iframeSrc", iframeSrc, 7);  // Save iframe src for 7 days
}

// Load the selected game and iframe src from cookies
function loadSelectedOption() {
    var selectedGame = getCookie("selectedGame");
    var iframeSrc = getCookie("iframeSrc");

    if (selectedGame && iframeSrc) {
        // Set the dropdown value to the saved selected game
        document.getElementById("gamepad").value = selectedGame;

        // Set the iframe src from the saved cookie
        var iframe = document.getElementById("main-iframe");
        iframe.src = iframeSrc;
    }
}

// On page load, load saved values
window.onload = function() {
    loadSelectedOption();  // Load selected game and iframe src on page load

    // Save selected option and iframe src every 10 milliseconds
    setInterval(function() {
        saveSelectedOption();
    }, 10);
};

// Handle the dropdown change event and update iframe src
function displaySelectedOption() {
    var selectedGame = document.getElementById("gamepad").value;
    var iframe = document.getElementById("main-iframe");

    // Save selected option and iframe src to cookies
    saveSelectedOption();

    // Update iframe src based on selected game
    switch (selectedGame) {
        case "GeForce":
            iframe.src = "../storage/geforce.html";
            break;
        case "Now.GG":
            iframe.src = "../storage/nowgg.html";
            break;
        case "EASYFUN":
            iframe.src = "../storage/easyfun.html";
            break;
        case "Itch.IO":
            iframe.src = "../storage/itch.html";
            break;
        case "1v1.lol":
            iframe.src = "https://1v1.lol";
            break;
        case "CrazyGames":
            iframe.src = "../storage/crazygames.html";
            break;
        case "RetroBowl":
            iframe.src = "https://game316009.konggames.com/gamez/0031/6009/live/index.html";
            break;
        case "CookieClicker":
            iframe.src = "../storage/cookieclicker.html";
            break;
        case "SubwaySurfers":
            iframe.src = "../storage/subwaysurfers.html";
            break;
        case "FruitNinja":
            iframe.src = "../storage/fruitninja.html";
            break;
        default:
            iframe.src = "";  // Default case (reset the iframe src if invalid)
    }
}

// Toggle visibility of the game selection dropdown
function toggleSelect() {
    var gamepad = document.getElementById("gamepad");
    gamepad.style.display = (gamepad.style.display === "none") ? "block" : "none";
}
