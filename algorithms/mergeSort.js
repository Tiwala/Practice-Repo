const mergeSort = (array) => {
    // edge case for if there's only one element in the array
    if (array.length <= 1) {
        return array;
    }

    // we're splitting the arrays into two
    const middleIndex = Math.floor(array.length/2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex, array.length);

    // recursively sorting and merging them; how this looks is that the array elements get isolated
    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );
}

const merge = (leftArr, rightArr) => {
    // we accumulate into output, index variables increment and are used to both traverse the arrays and slice remains of arrays
    let output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // indices need to match because we are comparing them to each other, if it's || it'll be compared with undefined if empty
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        let leftNum = leftArr[leftIndex];
        let rightNum = rightArr[rightIndex];
        
        // compares the numbers in the arrays, pushes them in order into output array
        if (leftNum < rightNum) {
            output.push(leftNum);
            leftIndex++
        } else {
            output.push(rightNum);
            rightIndex++
        }
    }

    // returns both the output and the remains of the arrays
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

console.log(mergeSort([5, 2, 10, 9, 7, 12, 3]));