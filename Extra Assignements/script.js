// Create a function that takes an number and creates array with all numbers till that number.
let num = []

function createArray(value) {
    for (let i = 1; i <= value; i++) {
        num.push(i);
    }
    console.log(num);
}
createArray(6);

// Drug nacin so input vrednost

// let num = [];

// function createArray() {
//     let arrayNum = parseInt(prompt(`Enter a number: `));

//     if(isNaN(arrayNum)) {
//         alert(`Please enter a valid value.`);
//     }
//     else if(arrayNum === 0) {
//         alert(`Values should not be 0.`)
//     }
//     else {
//         for(let i = 1; i <= arrayNum; i++) {
//             num.push(i);
//         }
//         alert(`Array numbers are [${num}]`)
//         num = [];
//     }
// }
// createArray();

console.log("///////////////////////////////");

// Create a function that takes an array and returns the first element.
let array = [2, 34, 45, 12, 37];

function getFirstValue() {
    let firstValue = array.shift();
    console.log(firstValue);
}
console.log(array);
getFirstValue();

console.log("///////////////////////////////");

// Write a function to reverse an array.
let a = [10, 20, 30, 40, 50];

function reverseArray() {
    let reversedArray = a.reverse();
    console.log(reversedArray);
}
console.log(a);
reverseArray();

console.log("///////////////////////////////");

// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
let nums = [2, 5, 12, 3, 6, 4, 9];

function search(y) {
    let result = nums.indexOf(y);
    console.log(result);
}
console.log(nums);
search(2);
search(6);
search(11);

console.log("///////////////////////////////");

// Write a function to check if an array contains a particular number.

let niza = [1, 2, 3, 4, 5];

function check(someNumber) {
    let partNumber = niza.includes(someNumber);
    console.log(partNumber);
}
console.log(niza);
check(2);
check(3);
check(6);

console.log("///////////////////////////////");

// Given an array of numbers, negate all elements contained within.
// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +

let brojki = [1, 4, -8, 32, -10, -56];

let negateArray = brojki.map(value => -value);

console.log(brojki);
console.log(negateArray);

console.log("///////////////////////////////");

// Create a function that takes an array and returns the difference between the biggest and smallest numbers.
let array1 = [2, -34, 45, -12, 37];

function diffMaxMin(array1) {
    let minNumber = array1[0];
    let maxNumber = array1[0];
    let diff = 0;

    for (let b = 0; b < array1.length; b++) {
        if (array1[b] < minNumber) {
            minNumber = array1[b];
        }
        if (array1[b] > maxNumber) {
            maxNumber = array1[b]
        }
    }
    diff = maxNumber - minNumber;
    console.log(`Maximum value is ${maxNumber} , minimum value is ${minNumber}`);
    console.log(`Difference between maximum and minimum value is ${diff}`);
}
console.log(array1);
diffMaxMin(array1);

console.log("///////////////////////////////");


