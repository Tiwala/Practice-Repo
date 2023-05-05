// var array = [3, 6, 2, 1, 5, 4]
// var sortedArray = [-7, -5, -4, -3, -2, 0, 1, 2, 3, 4, 5, 6]

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        for (let j = (i+1); j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp;
//         }
//        }
//     }
//     return arr;
// }

// function bubbleSort() {

// }

// function binarySearch(array, x) {
//     let start = 0;
//     let end = array.length - 1;

//     while (start <= end) {
//         let mid = Math.floor((start + end)/2)
//         if (array[mid] === x) {
//             return mid;
//         } else if (array[mid] < x) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
// }


//RECURSIVE
// function binarySearch(array, x, start = 0, end = array.length - 1) {
    // let mid = Math.floor((start + end)/2);
    //NONRECURSIVE WAY
    // while (start <= end) {
    //     let mid = Math.floor((start + end)/2);
    //     if (array[mid] === x) {
    //         return mid;
    //     } else if (array[mid] < x) {
    //         start = mid + 1;
    //     } else {
    //         end = mid - 1;
    //     }
    // }

    //RECURSIVE WAY
//     if ((array.length === 1 && array[0] != x) || start > end) {
//         return false;
//     }

//     if (array[mid] === x) {
//         return mid;
//     } else if (array[mid] < x) {
//         start = mid + 1;
//         return binarySearch(array, x, start, end);
//     } else {
//         end = mid - 1;
//         return binarySearch(array, x, start, end);
//     }

// }

// console.log(binarySearch(sortedArray, -3));

// const prevFib = [];

// const fib = (n) => {
//     if (prevFib[n] != null) {
//         return prevFib[n];
//     }
//     let result = 0;
//     if (n <= 1) {
//         result = 1;
//     } else {
//         result = (fib(n - 1) + fib(n - 2));
//     }
//     prevFib[n] = result;
//     return result;
// }

// console.log(fib(5));

// LENGTH OF LONGEST SUBSTRING BRO
// var lengthOfLongestSubstring = function(s) {
//     // let letters = {};
//     let currentLongest = '';
//     let previousLongest = '';
//     for (let i = 0; i < s.length; i++) {
//         let current = s[i];
//         console.log(currentLongest);
//         if (currentLongest.indexOf(current) === -1) {
//             currentLongest += current;
//             // console.log(currentLongest)
//             if (currentLongest.length > previousLongest.length) {
//                 previousLongest = currentLongest
//             }
//         } else {
//             currentLongest = currentLongest.slice(currentLongest.indexOf(current) + 1) + current;
//         }
//     }
//     if (currentLongest.length > previousLongest.length) {
//         return currentLongest.length;
//     } else {
//         return previousLongest.length;
//     }
// };


// console.log(lengthOfLongestSubstring('dvdf'));

// var intToRoman = function(num) {
//     const one = "I";
//     const five = "V";
//     const ten = "X";
//     const fifty = "L";
//     const hundred = "C";
//     const fiveHundred = "D";
//     const thousand = "M";
    
//     let obj = {};
    
//     let array = num.toString().split('');
//     let digitsArray = array.map(num => Number(num));

//     let result = ""
    
//     let multiplier = (10 ** (digitsArray.length - 1))
//     for (let i = 0; i < digitsArray.length; i++) {
//         obj[i] = digitsArray[i] * multiplier;
//         multiplier/= 10;
//     }


//     return obj;


//     // if (num < 4) {
//     //     for (let i = 0; i < num; i++) {
//     //         result += one;
//     //     }
//     // }
// };

// console.log(intToRoman(125));

function diagonalDifference(arr) {
    // Write your code here
    let lToR = 0;
    for (let i = 0; i < arr.length; i++) {
        lToR+= arr[i][i];
    }

    let rToL = 0;
    let index = arr.length - 1;
    for (let j = 0; j < arr.length; j++) {
        rToL+= arr[j][index]
        index--
    }
    
    return Math.abs(lToR - rToL)
}

console.log(diagonalDifference([[ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ]]))