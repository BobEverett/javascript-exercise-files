// map, filter, reduce

//using map to transform existing arrays with a function

let nums = [1, 2, 3, 4, 5, 6];

let numMap1 = nums.map(x => x * 5);

console.log(numMap1);

let nums2 = [1, 2, 3, 4, 5, 6, 10, 12, 15];

let numMap2 = nums2.map(x => (x / 3).toFixed(2));

console.log(numMap2);


// using filter to modify an existing array based on a filter criteria

let filter1 = nums2.filter(x => x < 10);
console.log(filter1);

let filter2 = nums.filter(x => (x % 2 == 0));
console.log(filter2);

// use reduce to sum the values in an array

let reduce1 = nums.reduce(function(accumulator, current) {
  return accumulator + current
})
console.log(reduce1);

// using reduce() with an arrow function

let reduce2 = nums2.reduce((accumulator, current) => (accumulator + current));
console.log(reduce2);
