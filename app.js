
let btn = document.querySelector('.btn');

btn.addEventListener('click', function inflationCalculator() {
  // grabbing input values
  let inflationRate = document.querySelector("#inflation-rate");
  inflationRate = parseFloat(inflationRate.value); //string to number converting
  let money = document.querySelector("#money");
  money = parseFloat(money.value); //string to number converting
  let years = document.querySelector("#years");
  years = parseFloat(years.value); //string to number converting

  //  ? calculate the inflation for one year
  let worth = money + money * (inflationRate / 100);

  //  ? calculate the inflation for the rest of years

  for (let i = 1; i < years; i++) {
    worth += worth * (inflationRate / 100);
  }

  worth = worth.toFixed(2);

  //  ! creating new element
  let newElement = document.createElement("div");
  newElement.className = "new-value";
  newElement.innerText = `Today's ${money} euros will worth same as ${worth} euros for ${years} years.`;

  document.querySelector(".container").appendChild(newElement);
})

