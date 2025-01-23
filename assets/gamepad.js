function displaySelectedOption() {
   var e = document.getElementById("gamepad").value;
   var t = document.getElementById("main-iframe");

   if (e === "geforce") {
      t.src = "../storage/geforce.html";
   } else if (e === "now.gg") {
      t.src = "../storage/nowgg.html";
   } else if (e === "ngg.lol") {
      t.src = "../storage/ngg.html";
   } else if (e === "itch.io") {
      t.src = "../storage/itch.html";
   } else if (e === "bloxd.io") {
      t.src = "https://bloxd.io";
   }
}
