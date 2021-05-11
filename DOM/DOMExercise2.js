function weightInChickenCalculation(weight) {
    return weight / 0.5;
}

let result = document.getElementById("result");
let weightInput = parseInt(prompt("Enter your weight: "));

if(!isNaN(weightInput)) {
    result.innerHTML = `<h2> ${weightInput} kg is ${weightInChickenCalculation(weightInput)} kg in chicken weight`;
}
else {
    result.innerHTML = `<h2> Wrong input value </h2>`;
}