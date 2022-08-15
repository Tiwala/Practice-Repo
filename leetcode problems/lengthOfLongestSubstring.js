// LENGTH OF LONGEST SUBSTRING BRO
var lengthOfLongestSubstring = function(s) {
    // let letters = {};
    let currentLongest = '';
    let previousLongest = '';
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        console.log(currentLongest);
        if (currentLongest.indexOf(current) === -1) {
            currentLongest += current;
            // console.log(currentLongest)
            if (currentLongest.length > previousLongest.length) {
                previousLongest = currentLongest
            }
        } else {
            currentLongest = currentLongest.slice(currentLongest.indexOf(current) + 1) + current;
        }
    }
    if (currentLongest.length > previousLongest.length) {
        return currentLongest.length;
    } else {
        return previousLongest.length;
    }
};