// Selecting elements
let input1 = document.querySelector(".number1");
let input2 = document.querySelector(".number2");
let result = document.querySelector(".result");

// Summation Function
function calculateSum() {
  let value1 = input1.value;
  let value2 = input2.value;

  if (value1 === "" || value2 === "") {
    result.value = "";
    return;
  }

  result.value = parseInt(value1) + parseInt(value2);
}

input1.addEventListener("input", calculateSum);
input2.addEventListener("input", calculateSum);
