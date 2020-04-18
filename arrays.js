/*

let myArray = [2, 'Pete', 2.99, 'another string'];
console.log(myArray[2]);
console.log(myArray[myArray.length - 1]);



let array = [1, 2, 3];
array[1] = 4;
console.log(array);
array[array.length] = 10;
console.log(array);

array.push('a');
console.log(array);

array.push(null, 'xyz');
console.log(array);
console.log(array.length);

let array2 = array.concat(42, 'abc');
console.log(array);
console.log(array2);

array.pop('xyz');
console.log(array);

let array3 = array.splice(1, 5);
console.log(array);
console.log(array3);



let array4 = [1, 2, 3, 5, 6, 7];

array4.forEach(function(num, index) {
    console.log(index + ' ' + num);
})

for (var n of array4) {
    console.log(n);
}

console.log('#'.repeat(20));
array4.forEach(num => console.log(num + 2));



let array5 = [1, 2, 3, 5, 6, 7];
let cubes = [];

array5.forEach(num => cubes.push(num * num * num));
console.log(cubes);

console.log('#'.repeat(40));

let quads = array5.map(num => num * num * num * num);
console.log(quads);

console.log('#'.repeat(40));

let subQuads = quads.filter(num => num > 80);
console.log(quads);
console.log(subQuads);

*/


let arr = [2, 3, 5, 7];
console.log(arr.reduce((accumulator, element) => accumulator + element));
console.log(arr.reduce((accumulator, element) => accumulator * element, 1));

console.log(arr);
