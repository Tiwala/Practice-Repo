// Binary Search
// Given array nums and a number target, return the index of target in nums
// If target is not it nums, return -1;
const search = (nums, target) => {
    // We're looking for the index so we deal with the indexes only
    let left = 0
    let right = nums.length - 1

    // keeps it running and ensures they never cross
    // right can become less than left if left and right eventually become the same but shit's still not found
    while (left <= right) {
        // mid is the index in the middle, we change this shit constantly
        let mid = Math.ceil((start + end)/2)
        // returns target if nums[mid] is target
        // if target is greater than mid, left becomes index of mid + 1
        // same if it's less
        if (nums[mid] === target) {
            return target;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // the loop will end if it's not there; and function returns - 1
    return -1;
}