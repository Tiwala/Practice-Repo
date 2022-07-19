var array = [3, 6, 2, 1, 5, 4]
var sortedArray = [-7, -5, -4, -3, -2, 0, 1, 2, 3, 4, 5, 6]

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
function binarySearch(array, x, start = 0, end = array.length - 1) {
    let mid = Math.floor((start + end)/2);
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
    if ((array.length === 1 && array[0] != x) || start > end) {
        return false;
    }

    if (array[mid] === x) {
        return mid;
    } else if (array[mid] < x) {
        start = mid + 1;
        return binarySearch(array, x, start, end);
    } else {
        end = mid - 1;
        return binarySearch(array, x, start, end);
    }

}

console.log(binarySearch(sortedArray, -3));