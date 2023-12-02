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
  const capital: number = parseInt(inputPrincipal.value);
  const years: number = parseInt(inputYears.value);
  const interest: number = parseInt(inputInterest.value);
  const ammount: string = (
    capital * Math.pow(1 + interest / 100, years)
  ).toFixed(2);
  calculatedReturns.innerText = ammount;
});
