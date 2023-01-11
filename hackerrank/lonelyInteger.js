// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    // Write your code here
    let obj = {};
    
    for (let int of a) {
        if (!obj[int]) {
            obj[int] = 1;
        } else {
            obj[int] = obj[int] += 1
        }
        // console.log(obj[int]);
    }
    
    for (let num in obj) {
        if (obj[num] === 1) {
            return num;
        }
    }

}

console.log(lonelyinteger([0, 0, 1, 2, 1]));