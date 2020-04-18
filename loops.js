// Loops and Interation
/*
let namesUpper = ['BOB', 'JOHN', 'ROBERT', 'EVERETT', 'THOMAS', 'DAVID', 'JAMES'];
let namesLower = [];
let namesCapitalized = [];
let i = 0;

while (i < namesUpper.length) {
    namesLower.push(namesUpper[i].toLowerCase());
    namesCapitalized.push(toCapitalize(namesLower[i]))
    i += 1;
    console.log(namesLower);
    console.log(namesCapitalized);
}

function toCapitalize(word) {
    let capWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capWord;
}



let namesUpper = ['BOB', 'JOHN', 'ROBERT', 'EVERETT', 'THOMAS', 'DAVID', 'JAMES'];
let namesLower = [];
let namesCapitalized = [];


for (let i = 0;
    (i < namesUpper.length); i += 1) {
    namesLower.push(namesUpper[i].toLowerCase());
    namesCapitalized.push(toCapitalize(namesLower[i]));
    console.log(namesLower);
    console.log(namesCapitalized);
}

function toCapitalize(word) {
    let capWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capWord;
}



let namesUpper = ['BOB', 'JOHN', 'ROBERT', 'EVERETT', 'THOMAS', 'DAVID', 'JAMES'];
let namesLower = [];
let namesCapitalized = [];


namesUpper.forEach(function(name) {
    namesLower.push(name.toLowerCase());
    console.log(namesLower);

});

namesLower.forEach(function(name2) {
    namesCapitalized.push(toCapitalize(name2));
    console.log(namesCapitalized);
});

function toCapitalize(word) {
    let capWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capWord;
}


let age = document.getElementById('age').value;
console.log(`In ten years you will be ${age + 10} years old`);


let futureAge = [10, 25, 20, 25, 30]
let rlSync = require("readline-sync");
let age = Number(rlSync.question('What\'s your age? '));

futureAge.forEach(function(futureAge) {
    console.log(`In ${futureAge} years, you will be ${age + futureAge} years old`);


});


let rlSync = require('readline-sync');
let factorial = rlSync.question('Which factorial do you want to solve? ');
let factorialResult = 1;

for (let i = factorial; i > 0; i -= 1) {
    factorialResult *= (i);
    console.log(factorialResult)
}


function factorial(number) {
    let result = 1;
    for (let i = number; i > 0; i -= 1) {
        result *= i;
    }
    return result;
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

numbers.forEach(function(number) {
    console.log(`${number}! is equal to ${factorial(number)}`)
})



let rlSync = require("readline-sync");
let range = rlSync.question('What range to you want to generate a random number? ');
let randNum = Math.floor(Math.random() * range);

for (let i = 0; i < 20; i += 1) {
    console.log(`Your random number is ${randNum}`);
    randNum = Math.floor(Math.random() * range);
}


let randNum = 0;
let i = 0;

function randomNumberBetween(min, max) {
    do {

        randNum = Math.floor(Math.random() * max);
        console.log(randNum);
        i += 1;
    } while (randNum < min);
    console.log(`It took ${i} tries to get a random number greater than ${min}.`)
    return randNum;
}

randomNumberBetween(3, 6);


function randomNumberBetween(min, max) {
    let randNum = 0;
    randNum = Math.floor(Math.random() * max);
    return randNum
}

let lowHigh = [
    [2, 4],
    [2, 8],
    [2, 12],
    [30, 60],
    [200, 240],
    [1000, 1250]
]
let i = 0;
let result;

lowHigh.forEach(function(range) {
    let low = range[0];
    let high = range[1];
    console.log(`Low is ${low}.`);
    console.log(`High is ${high}.`)

    do {
        result = randomNumberBetween(low, high);
        i += 1;
    } while (result <= low);

    console.log(result);
    if (i == 1) {
        console.log(`It took ${i} try to get a random number between ${low} and ${high}.`);
    }
    else {
        console.log(`It took ${i} tries to get a random number between ${low} and ${high}.`);
    }
    i = 0;
});


let result = 0;
let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let range2 = []

function factorial(number) {
    if (number == 1) {
        return 1
    }
    else {
        result = number * factorial(number - 1);
        number -= 1;
    }
    return result
}

range.forEach(function(value) {
    factorial(value);
    console.log(`${value}! is equal to ${result}`)
})

*/

let result = 0;


function factorial(number) {
    if (number <= 1) {
        return (result = 1)
    }
    else {
        result = number * factorial(number - 1);
        number -= 1;
    }
    return result
}

for (let k = 0; k <= 15; k += 1) {
    factorial(k);
    console.log(`${k}! is equal to ${result}`)
}
