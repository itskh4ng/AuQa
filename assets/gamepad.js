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
   } else if (e === "Bloxd.IO") {
      t.src = "../storage/bloxd.html";
   } else if (e === "Retro Bowl") {
      t.src = "https://game316009.konggames.com/gamez/0031/6009/live/index.html";
   }
}
