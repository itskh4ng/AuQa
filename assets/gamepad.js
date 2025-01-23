function displaySelectedOption() {
   var e = document.getElementById("gamepad").value;
   var t = document.getElementById("main-iframe");

   e === "geforce" ? t.src = "../storage/geforce.html" : 
   e === "now.gg" ? t.src = "../storage/nowgg.html" : 
   e === "ngg.lol" ? t.src = "../storage/ngg.html" : 
   e === "itch.io" ? t.src = "../storage/itch.html" : 
   e === "bloxd.io" && (t.src = "//bloxd.io");
}
