function displaySelectedOption() {
   var e = document.getElementById("gamepad").value;
   var t = document.getElementById("main-iframe");

   if (e === "GeForce") {
      t.src = "../storage/geforce.html";
   } else if (e === "Now.GG") {
      t.src = "../storage/nowgg.html";
   } else if (e === "NGG.LOL") {
      t.src = "../storage/ngg.html";
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
   }
}
