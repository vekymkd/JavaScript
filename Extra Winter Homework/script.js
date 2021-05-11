// EXTRA WINTER HOMEWORK

// * Note: Link this script to your html document and enter your solutions here.
// ** Note: Take all parameters from user input using prompt


// ----------- Task 01 --------------
// Write a JS function that will decide if a number entered by user is even or odd
// Example: isOddOrEven(3)
// Output 'Number 3 is odd number.'

// let number = parseInt(prompt("Enter a number: "));

// while (!number) {
//     alert("Wrong input type.");
//     number = parseInt(prompt("Enter a number: "));
// }

// function evenOrOddNumber() {
//         if (number % 2 === 0) {
//             alert(`Number ${number} is even number`);
//         }
//         else {
//             alert(`Number ${number} is odd number`);
//         }
// }

// evenOrOddNumber();

// ------------ Task 02 --------------
// Write a function that takes an integer minutes and converts it to seconds.
// Example: convert(5)
// output 300

// let minutes = parseInt(prompt("Enter the value of minutes to be converted: "));

// while (!minutes) {
//     alert("Wrong input type.");
//     minutes = parseInt(prompt("Enter the value of minutes to be converted: "));
// }

// function minutesToSeconds() {
//     let seconds = Math.floor(minutes * 60);
//     alert(`The value of ${minutes} minutes is ${seconds} seconds`);
// }

// minutesToSeconds();

// ------------ Task 03 -------------
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Example: points(38, 8) 
// output 100

function finalScore(twoPointers, threePointers) {
    twoPointers = twoPointers * 2;
    threePointers = threePointers * 3;
    let score = twoPointers + threePointers;
    console.log(`Points from two pointers: ${twoPointers} , points from three pointers: ${threePointers}`);
    console.log(`Total points scored: ${score}`);
}

finalScore(38, 8);

// ------------ Task 04 ------------ 
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// Example: howManyLegs(5, 2, 8)
// output: 50


function howManyLegs(chickenLegs, cowLegs, pigLegs) {
    chickenLegs = chickenLegs * 2;
    console.log(`Number of chicken legs is ${chickenLegs}`);
    cowLegs = cowLegs * 4;
    console.log(`Number of cow legs is ${cowLegs}`);
    pigLegs = pigLegs * 4
    console.log(`Number of pig legs is ${pigLegs}`);

    let totalLegs = chickenLegs + cowLegs + pigLegs;
    console.log(`The total number of animal legs is ${totalLegs}`);
}

howManyLegs(5, 2, 8);


// ------------ Task 05 ------------
// Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.
// Example: calculate(3, 7, '*')
// output: 21

function calculate(num1, num2, operator) {
    let result;
    if (operator === '+') {
        result = num1 + num2;
        console.log(result);
    }
    else if (operator === '-') {
        result = num1 - num2;
        console.log(result);
    }
    else if (operator === '*') {
        result = num1 * num2;
        console.log(result);
    }
    else if (operator === '/') {
        result = num1 / num2;
        console.log(result);
    }
}

calculate(5, 2, '+');
calculate(5, 2, '-');
calculate(5, 2, '*');
calculate(5, 5, '/');

// ------------- Task 06 -----------
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Example: comp("ABC", "DE")
// output false

let str1 = prompt("Enter a string to compare: ");
let str2 = prompt("Enter a string to compare: ");


function compare(str1, str2) {

    // while (str1 != String && str2 != String) {
    //     alert("Wrong input values");
    //     str1 = prompt("Enter a string to compare: ");
    //     str2 = prompt("Enter a string to compare: ");
    // }
    if (str1.length > str2.length) {
        console.log("Str1 is bigger than str2.");
    }
    else if (str1.length < str2.length) {
        console.log("Str2 is bigger than str1.");
    }
    if (str1.length === str2.length) {
        console.log("Both strings are equal");
    }
}

compare(str1, str2);

// ------------- Task 07 -----------
//A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break. So you need two parameters, one for user age and other for the bartender being on break or not.
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
// Example: shouldServeDrinks(17, true) output false
// Example: shouldServeDrinks(19, false) output true
// Example: shouldServeDrinks(30, true) output false

function shouldServeDrinks(age, Boolean) {
    if (age < 18 && Boolean === true) {
        console.log(false);
    }
    else if (age => 18 && Boolean === false) {
        console.log(true);
    }
}

shouldServeDrinks(17, true);
shouldServeDrinks(19, false);
shouldServeDrinks(25, true);


// ------------- Task 08 -----------
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// Example: moodToday("happy") output "Today, I am feeling happy"
// Example: moodToday() output "Today, I am feeling neutral"

function moodToday(mood = 'neutral') {
    switch (mood) {
        case 'happy':
            console.log("Today, I am feeling happy");
            break;
        default:
            console.log("Today, I am feeling neutral");
    }
}

moodToday('happy');

// ------------ Task 09 -----------
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

//The function will be in this form: equalSlices(total slices, no. recipients, slices each)
// Example: equalSlices(11, 5, 2) output true (5 people x 2 slices each = 10 slices < 11 slices)
// Example: equalSlices(11, 5, 3) output false (5 people x 3 slices each = 15 slices > 11 slices)

function equalSlices(totalSliceNum, recipientsNum, sliceEach) {
    if (totalSliceNum >= recipientsNum * sliceEach) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

equalSlices(11, 5, 2);

// ---------- Task 10 ----------
// For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

// Example: totalCups(6) output 7
// Example: totalCups(12) output 14
// Example: totalCups(213) output 248

function totalCups(cupsTotal) {
    let result = cupsTotal + parseInt(cupsTotal / 6);
    console.log(result);
}

totalCups(12);
