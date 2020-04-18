let name = 'Victor';

console.log(`Good morning, ${name}.`);
console.log(`Good afternoon, ${name}.`);
console.log(`Good evening, ${name}.`);

console.log()
console.log('#'.repeat(50));
console.log()

let age = 20;

console.log(`In 10 years, you will be ${age+10} years old.`);
console.log(`in 20 years, you will be ${age+20} years old.`);
console.log(`In 30 years, you will be ${age+30} years old.`);

console.log()
console.log('#'.repeat(50));
console.log()

let rlSync = require("readline-sync");
let name2 = rlSync.question('What is your name?  ');
console.log(`Good Morning ${name2}!`);

console.log()
console.log('#'.repeat(50));
console.log()

//sum numbers
let rlSync2 = require('readline-sync');

let number1 = Number(rlSync2.question('Enter the first number  '));
let number2 = Number(rlSync2.question('Eneter the second number '));
let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);

console.log()
console.log('#'.repeat(50));
console.log()


//F to C converter 
let rlSync3 = require('readline-sync');

let fTemperature = Number(rlSync3.question('Enter today\'s temperature  '));

let cTemperature = (fTemperature - 32) * (5 / 9);

console.log(`When the temperature is ${fTemperature}ᵒF, then it's ${cTemperature.toFixed(1)}ᵒC.`);

console.log()
console.log('#'.repeat(50));
console.log()


//Find the length of the hypotenuese 
let rlSync4 = require('readline-sync');

let side1 = Number(rlSync4.question('Enter the length of one side of a triangle  '));
let side2 = Number(rlSync4.question('Enter the length of the other side of a triangle  '));
let hypot = ((side1 ^ 2) + (side2 ^ 2)) ^ (1 / 2);

console.log(`The hypotenuese of a right triangle with sides ${side1} and ${side2} is ${hypot.toFixed(2)}`);

console.log()
console.log('#'.repeat(50));
console.log()


// Exercises
let rlSync5 = require("readline-sync");
let firstName = (rlSync5.question('What\'s your first name?  '));
let lastName = rlSync5.question('What\'s your last name?  ');

console.log(`\nHello, ${firstName} ${lastName}!`);

console.log()
console.log('#'.repeat(50));
console.log()
