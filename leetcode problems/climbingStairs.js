// Memoization tool/accumulator
let prevFib = [];
var climbStairs = function(n) {
    // Keep in mind that the number of steps is the index we're calling in prevFib
    // Catches all those you've previously processed
    if (prevFib[n] != null) {
        return prevFib[n];
    }
    // accumulator
    let result = 0;
    // Number of steps will never be 0
    if (n <= 1) {
        result = 1;
    } else {
        // Fibonacci is the result of the 2 previous indices
        result = (climbStairs(n-1) + climbStairs(n-2));
    }
    // Logs the result into the array at the said number of steps
    prevFib[n] = result;
    console.log(prevFib)
    // We return the value at the current index
    return result
};


console.log(climbStairs(5))