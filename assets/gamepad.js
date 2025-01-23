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
      t.src = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://274079163-174037128449362058.preview.editmysite.com/uploads/b/139890129-899796311729593176/files/rtbl.xml&container=ig";
   }
}
