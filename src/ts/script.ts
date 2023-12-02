const inputPrincipal: HTMLInputElement = document.getElementById(
  "principal"
) as HTMLInputElement;
const inputYears: HTMLInputElement = document.getElementById(
  "years"
) as HTMLInputElement;
const inputInterest: HTMLInputElement = document.getElementById(
  "interest"
) as HTMLInputElement;
const calculatedReturns: HTMLSpanElement = document.getElementById(
  "show-calculated-returns"
) as HTMLSpanElement;
const calculateButton: HTMLButtonElement = document.getElementById(
  "calculate-button"
) as HTMLButtonElement;

calculateButton.addEventListener("click", (event) => {
  console.log("Clicked");
  const capital: number = parseInt(inputPrincipal.value);
  const years: number = parseInt(inputYears.value);
  const interest: number = parseInt(inputInterest.value);
  console.log(capital, years, interest);
  const ammount: number = capital * Math.pow(1 + interest, years);
  console.log(ammount);
});
