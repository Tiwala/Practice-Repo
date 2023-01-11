// Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:
// If i is a multiple of both 3 and 5, print FizzBuzz
// If i is a multiple of 3 but not 5, print Fizz
// If i is a multiple of 5, print Buzz
// If i is not a multiple of 3 or 5, print i

function fizzBuzz(n) {
    // Write your code here
    let i = 0;
    
    while (i < n) {
        i++
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i)
        }
    }
    
}