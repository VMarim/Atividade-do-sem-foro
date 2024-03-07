var intervalId = null;
var emergencyMode = false;

function changeLights() {
  if (!emergencyMode) {
    var redLight = document.getElementById('red');
    var yellowLight = document.getElementById('yellow');
    var greenLight = document.getElementById('green');

    if (redLight.style.backgroundColor === "red") {
      redLight.style.backgroundColor ='rgba(255, 0, 0, 0.377)';
      yellowLight.style.backgroundColor = "yellow";
    } else if (yellowLight.style.backgroundColor === "yellow") {
      yellowLight.style.backgroundColor = 'rgba(248, 248, 10, 0.381)';
      greenLight.style.backgroundColor = "green";
    } else {
      greenLight.style.backgroundColor = 'rgba(15, 193, 15, 0.359)';
      redLight.style.backgroundColor = "red";
    }
  }
}


function toggleCheck() {
  if(document.getElementById("myCheckbox").checked === true){
    clearInterval(intervalId)
    intervalId = setInterval(changeLights, 2000);
  } else {
    clearInterval(intervalId)
    intervalId = setInterval(blinkYellow, 500);
  }
}

function blinkYellow() {
    var redLight = document.getElementById('red');
    var yellowLight = document.getElementById('yellow');
    var greenLight = document.getElementById('green');
    greenLight.style.backgroundColor = 'rgba(15, 193, 15, 0.359)';
    redLight.style.backgroundColor = 'rgba(255, 0, 0, 0.377)';

  if (yellowLight.style.backgroundColor === "yellow") {
    yellowLight.style.backgroundColor = 'rgba(248, 248, 10, 0.381)';
  } else {
    yellowLight.style.backgroundColor = "yellow";
  }
}