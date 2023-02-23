var clicked = 0;

function generateGrid() {
  const numbers = [];
  let max = document.getElementById("maxInput").value;
  let min = document.getElementById("minInput").value;
  if ((min > 9 || max > 9) || (min < 0 || max < 0)) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").textContent = "The minimum and maximum must be between 0 and 9.";
    return null;
  } else if (min > max) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").textContent = "The minimum must be smaller than the maximum.";
    return null;
  } else {
    clicked = 1;
    document.getElementById("error").style.display = "none";
  }
  for (let r = 0; r < 15; r++) {
    for (let i = 0; i < 40; i++) {
      numbers.push(Math.floor(Math.random() * (max - min + 1)) + Number(min));
    }
    numbers.push("<br>");
  }
  document.getElementById("numbers").innerHTML = numbers.join("");
}

function printGrid() {
  if (clicked == 1) {
    if (document.getElementById("error").style.display === "none") {
      window.print();
    } else {
      document.getElementById("error").style.display = "none";
      window.print();
      document.getElementById("error").style.display = "block";  
    }
  }
}
