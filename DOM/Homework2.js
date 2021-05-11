// Print all numbers from an array and the sum
//Create an array with numbers
//Print all numbers from the array in a list element, in a new HTML page
//Print out the sum of all of the numbers below the list
let arrayNum = document.getElementById("array").innerHTML = [2, 5, 7, 3, 4];
let sum = document.getElementById("sum").innerHTML = `The sum of the array is: ${arrayNum.reduce((a, b) => a + b, 0)}`;