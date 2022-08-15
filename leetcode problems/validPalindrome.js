// Given a string s, returns true if s is a valid palindrome

var isPalindrome = function(s) {
    // notes on .replace()
    // anything within the // is the regexp
    // the brackets indicate character class; allows you to access the range between 0-9 and a-z
    // ^ indicates what is NOT in the regexp
    // g is the global flag, allows you to refer to all occurrences of non-alphanumeric stuff and not just the first
    // i makes it case insensitive
    let string = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
    // split('') separates array per character, reverse() reverses the array, and join('') joins all characters together into a string
    let palindrome = string.split('').reverse().join('');
    
    if (string === palindrome) {
        return true;
    } else {
        return false;
    }
};

// Faster and less memory
var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
    // accumulators for the start and end of the string
    let left = 0;
    let right = string.length - 1;
    
    while (left < right) {
        if (string[left] !== string[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};