let Arr1 = [];
let counter = 1;
let input = document.querySelector(".customerData");
let Add_Button = document.querySelector(".add");
let Next_Customer = document.querySelector(".action-progress");
let customers = document.querySelector(".waiting");
let progress = document.querySelector(".inProgress");

Add_Button.addEventListener("click", () => {
  let CustomerName = input.value;

  Arr1.push({
    name: CustomerName,
    number: counter,
  });

  customers.innerHTML += `<div class="bg-danger  bg-gradient bg-opacity-50  rounded px-1"><p>#${counter} --> ${CustomerName}</p></div>`;
  counter++;
  input.value = "";
});

Next_Customer.addEventListener("click", () => {
  let progressCustomer = Arr1.shift();

  progress.innerHTML = `<p><strong>Now Serving:</strong> #${progressCustomer.number} --> ${progressCustomer.name}</p>`;
  let firstWaiting = customers.querySelector("div");
  firstWaiting.remove();
  if (Arr1.length === 0) {
    alert("NO MORE WAITING CUSTOMERS");
  }
});
