/*
function say() {
    console.log('\nWelcome Back, Bob\n');
}
say()

console.log('#'.repeat(50));


function say(words = 'This is supposed to be a movie quote generator') {
    console.log(`\n${words}!`);
}

let phrases = ['May the force be with you', 'Go ahead, make my day', 'Why don\'t you cry about it, Saddlebags',
    'I\'ll be back', 'What are you looking at, butthead'
]
let i = 0
do {
    say(phrases[i]);
    i += 1
} while (i < phrases.length);


console.log('#'.repeat(50));

console.log(say())


function greetPeople(phrase = "Wassap!") {
    let greetingMessage = 'Good Morning';
    console.log(greetingMessage);
}

greetPeople();


function getFirst() {
    let input1 = require("readline-sync");
    let firstName = input1.question('Enter your first name: ');
    return firstName;
}

function getLast() {
    let input1 = require("readline-sync");
    let lastName = input1.question('Enter your last name: ');
    return lastName
}

console.log(`\nWelcome, ${getFirst()} ${getLast()}!\n`);


function getName(prompt) {
    let readlineSync = require("readline-sync");
    let name = readlineSync.question(prompt);
    return name;
}

let firstName = getName('Enter your first name: ');
let lastName = getName('\nEnter your last name: ');
console.log(`\nHello, ${firstName} ${lastName}!\n`);


function multiply(a, b) {
    return a * b;
}

let readlineSync = require('readline-sync');
let num1 = Number(readlineSync.question('Enter a number: '));
let num2 = Number(readlineSync.question('Enter another number: '));
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);

*/
