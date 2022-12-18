function changeImage() {
    if (
      document.getElementById("minhaimagem").src ="Light-Bulb-PNG-Photo.png"
    ) {
      document.getElementById("minhaimagem").src ="Light-Bulb-PNG-Photo.png";
      document.getElementById("switch").innerHTML = "Desligar";
      document.getElementById("main").classList.remove("lightoff");
      document.getElementById("main").classList.add("lighton");
    } else if (
      document.getElementById("minhaimagem").src ="Light-Bulb-PNG-Photo.png"
    ) {
      document.getElementById("minhaimagem").src ="Light-Bulb-PNG-Photo.png";
      document.getElementById("switch").innerHTML = "Ligar";
      document.getElementById("main").classList.add("lightoff");
      document.getElementById("main").classList.remove("lighton");
    }
  }
  
  document.getElementById("switch").addEventListener("click", changeImage);

  
  