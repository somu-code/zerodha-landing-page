"use strict";
const inputPrincipal = document.getElementById("principal");
const inputYears = document.getElementById("years");
const inputInterest = document.getElementById("interest");
const calculatedReturns = document.getElementById("show-calculated-returns");
const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", (event) => {
    console.log("Clicked");
    const capital = parseInt(inputPrincipal.value);
    const years = parseInt(inputYears.value);
    const interest = parseInt(inputInterest.value);
    console.log(capital, years, interest);
    const ammount = capital * Math.pow(1 + interest, years);
    console.log(ammount);
});
