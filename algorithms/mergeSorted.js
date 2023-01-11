// Write a function called mergeSorted, which takes in two sorted arrays, and
// returns a new array, also in sorted order, which contains the elements in the
// two given arrays.
function mergeSorted(arr1, arr2) {
    let output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < arr1.length && rightIndex < arr2.length) {
        let leftEle = arr1[leftIndex];
        let rightEle = arr2[rightIndex];

        if (leftEle < rightEle) {
            output.push(leftEle);
            leftIndex++;
        } else {
            output.push(rightEle);
            rightIndex++;
        }
    }

    return [...output, ...arr1.slice(leftIndex), ...arr2.slice(rightIndex)];
}

console.log(mergeSorted([1, 3, 5], [2, 4]));
console.log(mergeSorted([2, 5, 6], [3]));

console.log(mergeSorted([], [1, 2, 3]))