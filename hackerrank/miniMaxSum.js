// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    // Write your code here
    // Accumulates each number in the array
    let min = arr[0];
    let max = arr[0];
    
    let sum = 0;
    for (let num of arr) {
        // Registers numbers compared to the current number to the accumulator
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
        sum += num;
    }
    // Returns the minimum and maximum values
    console.log(sum-max, sum-min)
}