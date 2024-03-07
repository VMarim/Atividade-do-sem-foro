var intervalId = null;
var emergencyMode = false;

function changeLights() {
  if (!emergencyMode) {
    var redLight = document.querySelector('.red');
    var yellowLight = document.querySelector('.yellow');
    var greenLight = document.querySelector('.green');

    if (redLight.style.backgroundColor === "red") {
      redLight.style.backgroundColor = "black";
      yellowLight.style.backgroundColor = "yellow";
    } else if (yellowLight.style.backgroundColor === "yellow") {
      yellowLight.style.backgroundColor = "black";
      greenLight.style.backgroundColor = "green";
    } else {
      greenLight.style.backgroundColor = "black";
      redLight.style.backgroundColor = "red";
    }
  }
}

function emergency() {
  if (!emergencyMode) {
    emergencyMode = true;
    clearInterval(intervalId); // Parar a sequência anterior
    intervalId = setInterval(blinkYellow, 500); // Iniciar o modo de emergência (pisca-amarelo)
  } else {
    emergencyMode = false;
    clearInterval(intervalId); // Parar o modo de emergência
    intervalId = setInterval(changeLights, 2000); // Reiniciar a sequência normal
  }
}

function blinkYellow() {
    var redLight = document.querySelector('.red');
    var yellowLight = document.querySelector('.yellow');
    var greenLight = document.querySelector('.green');
    greenLight.style.backgroundColor = "black";
    redLight.style.backgroundColor = "black";

  if (yellowLight.style.backgroundColor === "yellow") {
    yellowLight.style.backgroundColor = "black";
  } else {
    yellowLight.style.backgroundColor = "yellow";
  }
}