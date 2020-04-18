//How to create columns of equal width to make output values more readable

let num1 = 24;
let num2 = 456;
let num3 = 56789;
let num4 = 1;

// numbers must be converted to a string in order to use string methods on the output "num.toString()"

// ten places of padding
console.log(num1.toString().padEnd(10) + num2.toString().padEnd(10) + num3.toString().padEnd(10) + num4.toString());

// fifteen places of padding
console.log(num1.toString().padEnd(15) + num2.toString().padEnd(15) + num3.toString().padEnd(15) + num4.toString());

// twenty places of padding
console.log(num1.toString().padEnd(20) + num2.toString().padEnd(20) + num3.toString().padEnd(20) + num4.toString());
