// Given a string of parentheses, brackets, etc, return true if string is valid and false if not
var isValid = function(s) {
    // Object which has our parentheses varieties
    let obj = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    };
    // We use this to log our closing parentheses
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        // If the current iteration is an opening parentheses, we push its closing pair in the array
        if (obj[current]) {
            arr.push(obj[current]);
        // If the current is not an opening parentheses, we check if the last one is one that closes the last opening parentheses
        // If not, we immediately return false
        // IT SEEMS THAT MERELY CHECKING WITH .POP() ALSO REMOVES THE LAST ELEMENT
        } else if (current !== arr.pop()){
            return false;
        }
    }
    // We make sure that the array is empty. If it isn't, it means that parentheses weren't closed, etc.
    if (arr.length === 0) {
        return true;
    } else {
        return false;   
    }
};