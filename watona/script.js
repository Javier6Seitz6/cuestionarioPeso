function enviar() {
    const genero = document.getElementById("genero").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const mensaje = document.getElementById("mensaje");
    const imagen = document.getElementById("imagen");
    const audio = document.getElementById("audio");
  
    if (genero === "femenino" && peso >= 100) {
      mensaje.textContent = "Watona qlia";
      imagen.style.display = "block";
      audio.play();
    } else if (genero === "masculino") {
      mensaje.textContent = "Bien bro";
      imagen.style.display = "none";
      audio.pause();
      audio.currentTime = 0;
    } else {
      mensaje.textContent = "Todo correcto.";
      imagen.style.display = "none";
      audio.pause();
      audio.currentTime = 0;
    }
  }
  
  function reiniciar() {
    document.getElementById("genero").value = "masculino";
    document.getElementById("peso").value = "";
    document.getElementById("mensaje").textContent = "";
    document.getElementById("imagen").style.display = "none";
    const audio = document.getElementById("audio");
    audio.pause();
    audio.currentTime = 0;
  }
  