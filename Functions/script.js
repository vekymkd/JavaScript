//Create a function called tellStory()
//The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
//The function should return one big string with a story made from the arguments
let array = ["Velimir", "happy", "learning"];

function tellStory(array) {
    console.log(`This is ${array[0]}. ${array[0]} is a nice person. Today they are ${array[1]}.
    They are ${array[2]} all day. The end`);
}

tellStory(array);

// Write a function that will take an array of 5 numbers as an argument and return the sum.
//Print it in the console or in alert
//Write another function called validateNumber() that checks if a number is a valid number and call it for every number.
//If one of the numbers of the array is invalid show an error message instead of a result.
let numbers = [1, 2, 3, 4, 5];

function validateNumber(number) {
    return !isNaN(number)
}

function sumNumbers() {
    if (
        validateNumber(numbers[0]) &&
        validateNumber(numbers[1]) &&
        validateNumber(numbers[2]) &&
        validateNumber(numbers[3]) &&
        validateNumber(numbers[4])) {
        console.log("Every element is a number");
        console.log(numbers.reduce((a, b) => a + b, 0));
    }
    else {
        console.log("Error!");
    }
}
sumNumbers();