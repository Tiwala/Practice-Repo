let prevFib = [];
var climbStairs = function(n) {
    if (prevFib[n] != null) {
        return prevFib[n];
    }
    let result = 0;
    if (n <= 1) {
        result = 1;
    } else {
        result = (climbStairs(n-1) + climbStairs(n-2));
    }
    prevFib[n] = result;
    console.log(prevFib)
    return result
};

console.log(climbStairs(5))