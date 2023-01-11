// Given an unsorted array of integers, return the median value after sorting it

function findMedian(arr) {
    // Write your code here
    // Unoptimized sort, we can do a merge sort here
    // const sorted = arr.sort((a, b) => a - b);

    const mergeSort = (array) => {
        if (array.length <= 1) {
            return array;
        }

        const middle = Math.floor(array.length/2);
        const leftArray = array.slice(0, middle);
        const rightArray = array.slice(middle, array.length);

        return merge(
            mergeSort(leftArray),
            mergeSort(rightArray)
        )
    }

    const merge = (leftArr, rightArr) => {
        let output = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
            let leftNum = leftArr[leftIndex];
            let rightNum = rightArr[rightIndex];

            if (leftNum < rightNum) {
                output.push(leftNum);
                leftIndex++
            } else {
                output.push(rightNum);
                rightIndex++
            }
        }
        return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
    }

    let sorted = mergeSort([...arr])
    
    const middleIndex = Math.floor(sorted.length/2);
    
    return sorted[middleIndex];
}

console.log(findMedian([3, 1, 2, 5, 4]))