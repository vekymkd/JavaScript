// Write a JavaScript function when given an array of strings it will create one big string and return it.
function bigString() {
    let array = ["Hello", "there", "students", "from", "SEDC", "!"]
    console.log(array.join(" "));
}
bigString();

console.log("//////////////////////////////");

// Write a loop in JavaScript that in range of 1 till 20 will write in the console every number
// and will add \n after every even number otherwise it will add " " empty space.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + "\n");
    }
}

console.log("////////////////////////////");

// Write a JavaScript function that will return the sum of MIN and MAX values from an array with numbers.
function sumOfMaxAndMinNumbers() {
    let arrayNum = [3, 5, 6, 8, 11];

    let maxNum = 0, minNum = arrayNum[0], sum = 0;

    for (let y = 0; y < arrayNum.length; y++) {
        if (maxNum < arrayNum[y]) {
            maxNum = arrayNum[y];
        }
    }
    for (let y = 0; y < arrayNum.length; y++) {
        if (arrayNum[y] < minNum) {
            minNum = arrayNum[y];
        }
    }
    sum = maxNum + minNum;

    console.log(`The minimum value is ${minNum}`);
    console.log(`The minimum value is ${maxNum}`);
    console.log(`The sum of the minimum value and the maximum value is ${sum}`);
}
sumOfMaxAndMinNumbers();

console.log("////////////////////////////");

// Write a JavaScript function that when given 2 arrays of students first name and last name will return a new array with full names.
// Every name should have a numeric value before it.

function studentFullNames() {
    let firstName = ["Bob", "Jill"];
    let lastName = ["Gregory", "Wurtz"];
    let fullName = [];

    for(let a = 0, b = 0, counter = 1; a < firstName.length, b < lastName.length; a++, b++, counter++) {
        fullName.push(`${counter}.` + firstName[a] + " " + lastName [b]);
    }
    console.log(fullName);
}
studentFullNames();