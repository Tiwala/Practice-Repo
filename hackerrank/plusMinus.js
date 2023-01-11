// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    // Write your code here
    let pos = 0;
    let neg = 0;
    let zero = 0;
    
    for (let num of arr) {
        if (num > 0) {
            pos++;
        } else if (num < 0) {
            neg++;
        } else {
            zero++
        }
    }
    
    // toFixed indicates how many decimal places the number returns
    // \n makes sure that it breaks into a new line
    console.log(pos/arr.length.toFixed(6), '\n', neg/arr.length.toFixed(6), '\n', zero/arr.length.toFixed(6))

}