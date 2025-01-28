function saveSelectedOption(e) {
    localStorage.setItem("selectedGame", e);
}

function loadSelectedOption() {
    var e = localStorage.getItem("selectedGame");
    if (e) {
        var t = document.getElementById("gamepad");
        var r = document.getElementById("main-iframe");
        t.value = e;
        if (e === "GeForce") {
            r.src = "../storage/geforce.html";
        } else if (e === "Now.GG") {
            r.src = "../storage/nowgg.html";
        } else if (e === "EASYFUN") {
            r.src = "../storage/easyfun.html";
        } else if (e === "Itch.IO") {
            r.src = "../storage/itch.html";
        } else if (e === "1v1.lol") {
            r.src = "https://1v1.lol";
        } else if (e === "CrazyGames") {
            r.src = "../storage/crazygames.html";
        } else if (e === "RetroBowl") {
            r.src = "https://game316009.konggames.com/gamez/0031/6009/live/index.html";
        } else if (e === "CookieClicker") {
            r.src = "../storage/cookieclicker.html";
        } else if (e === "SubwaySurfers") {
            r.src = "../storage/subwaysurfers.html";
        } else if (e === "FruitNinja") {
            r.src = "../storage/fruitninja.html";
        }
    }
}

window.onload = function() {
    loadSelectedOption();
    setInterval(function() {
        saveSelectedOption(document.getElementById("gamepad").value);
    }, 10);
};
