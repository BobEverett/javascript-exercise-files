/*

let number = Number(prompt("Enter a number between 1 and 10: "));

if (number === 3) {
    console.log("The number is 3");
}
else if (number === 4) {
    console.log('The number is 4');
}
else {
    console.log('The number is neither 3 nor 4');
}



function evenOdd(num) {
    if (!Number.isInteger(num)) {
        console.log(`${num} is an invalid number, it must be an integer`)
    }
    else if ((num % 2) === 0) {
        console.log(`${num} is even`);
    }
    else {
        console.log(`${num} is odd`);
    }
}

let i = 1;
do {
    evenOdd(i);
    i += 6.5;
} while (i <= 100);



function allCaps10(phrase = 'The Lord of the Rings') {
    if (phrase.length >= 10) {
        console.log(phrase.toUpperCase());
    }
    else {
        console.log(phrase);
    }
}

let words = ['The Matrix', 'A Few Good Men', 'The Firm', '', 'The Kingdom of Heaven', '', 'Alita'];
let i = words.length - 1;

do {
    allCaps10(words[i]);
    i -= 1;
} while (i >= 0);

*/

function inBetween(num) {
    if (num > 100) {
        console.log(`${num} is greater than 100`);
    }
    else if (num <= 100 && num > 50) {
        console.log(`${num} is between 51 and 100`);
    }
    else if (num <= 50 && num >= 0) {
        console.log(`${num} is between 0 and 50`);
    }
    else if (num < 0) {
        console.log(`${num} is less than 0`);
    }

}

let numbers = [25, 75, 125, -25];
let i = 0;

do {
    inBetween(numbers[i]);
    i += 1;

} while (i <= (numbers.length));
