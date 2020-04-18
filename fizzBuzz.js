/* 
Print the numbers 1 to 100 such that:
    if the number is a multiple of 3 print 'Fizz'
    if the number is a multiple of 5 print 'Buzz'
    if the number is a multiple of 3 and 5 print 'FizzBuzz'
*/



function fizzBuzz(low, high) {
    for (let i = low; i <= high; i += 1) {
        if (((i % 3) === 0) && ((i % 5) === 0)) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz(1, 100)
