// variable
const inches = document.querySelector(".inches");
const meter = document.querySelector(".meter");
const calculate = document.querySelector("button");

function converting() {
  if (inches.value === "") {
    meter.value = "";
  } else {
    meter.value = inches.value / 39.37;
  }
}

calculate.addEventListener("click", converting);
