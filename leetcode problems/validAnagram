// Given two strings, check if they are an anagram of each other
// Returns true if anagram, else returns false
var isAnagram = function(s, t) {
    // Immediately check if the lengths are different, return false if actually different
    if (s.length !== t.length) {
        return false;
    }
    // Storage
    let obj = {};
    
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        // We can't just use the index as the value for the characters in the obj because it'll just constantly be replaced
        // Instead, we count them
        if (!obj[current]) {
            obj[current] = 1;
        } else {
            obj[current] += 1;
        }
        console.log(obj)
    }
    
    for (let j = 0; j < t.length; j++) {
        let newCurrent = t[j];
        // If the current character for t isn't there, immediately return false
        // If it is, we decrement until it's 0. If it reaches 0 or less, it means that t has more of that character than s
        if (!obj[newCurrent]) {
            return false;
        }
        if (obj[newCurrent]) {
            obj[newCurrent] -= 1;
            if (obj[newCurrent <= 0]) {
                return false;
            }
        }
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram'))