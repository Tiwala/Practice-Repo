// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine
// and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
var canConstruct = function(ransomNote, magazine) {
    // you can't splice strings so make it into an array
    let mag = magazine.split('')
    for (let i = 0; i < ransomNote.length; i++) {
        // if ransom note letter is not in magazine
        if (mag.indexOf(ransomNote[i]) === -1) {
            return false;
        } else {
            // remove the current letter from the array
            mag.splice(mag.indexOf(ransomNote[i]), 1);
        }
    }
    // if the loop resolves
    return true;
};

console.log(canConstruct('aa', 'aab'))

