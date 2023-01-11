function processData(input) {
    //Enter your code here
    // changes input into array, checking if it breaks lines and enters a new line
    let inputArray = input.split('\r?\n');

    const helper = (word) => {
        let string = word.slice(4, word.length);
        // adds a space before all capital letters, removes white space at the sides, and makes them lowercase
        let withSpace = string.replace(/[A-Z]/g, ' $&').trim().toLowerCase()
        let stringArray = string.split('');
    
        if (word[0] === 'S') {
            if (word[2] === 'M') {
                return withSpace.replace('()', '');
            } else if (word[2] === 'C') {
                return withSpace;
            } else if (word[2] === 'V') {
                return withSpace;
            }
        } else if (word[0] === 'C') {
            if (word[2] === 'M') {
                // let stringArray = string.split('');
                for (let i = 0; i < stringArray.length; i++) {
                    if (stringArray[i] === ' ') {
                        stringArray[i + 1] = stringArray[i + 1].toUpperCase()
                    }
                }
                let joined = stringArray.join('').replace(/\s/g, '')
                return joined.concat('()').trim();
            } else if (word[2] === 'C') {
                stringArray[0] = stringArray[0].toUpperCase();
                for (let i = 0; i < stringArray.length; i++) {
                    if (stringArray[i] === ' ') {
                        stringArray[i + 1] = stringArray[i + 1].toUpperCase()
                    }
                }
                let joined = stringArray.join('').replace(/\s/g, '')
                return joined.trim();
            } else if (word[2] === 'V') {
                for (let i = 0; i < stringArray.length; i++) {
                    if (stringArray[i] === ' ') {
                        stringArray[i + 1] = stringArray[i + 1].toUpperCase()
                    }
                }
                let joined = stringArray.join('').replace(/\s/g, '')
                return joined.trim();
            }
        }
    }

    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = helper(inputArray[i]);
    }
    
    console.log(inputArray.join('\r\n'));
}

console.log(processData('C;V;white sheet of paper'))