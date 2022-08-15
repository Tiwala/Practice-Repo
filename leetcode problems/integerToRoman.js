// var intToRoman = function(num) {
//     const one = "I";
//     const five = "V";
//     const ten = "X";
//     const fifty = "L";
//     const hundred = "C";
//     const fiveHundred = "D";
//     const thousand = "M";
    
//     let obj = {};
    
//     let array = num.toString().split('');
//     let digitsArray = array.map(num => Number(num));

//     let result = ""
    
//     let multiplier = (10 ** (digitsArray.length - 1))
//     for (let i = 0; i < digitsArray.length; i++) {
//         obj[i] = digitsArray[i] * multiplier;
//         multiplier/= 10;
//     }


//     return obj;


//     // if (num < 4) {
//     //     for (let i = 0; i < num; i++) {
//     //         result += one;
//     //     }
//     // }
// };

// console.log(intToRoman(125));

var intToRoman = function(num) {
    let result = ''
    
    let currentValue = num;
    
    while (currentValue > 0) {
        if (currentValue >= 1000) {
            result += 'M';
            currentValue -= 1000;
        } else if (currentValue >= 900) {
            result += 'CM';
            currentValue -= 900;
        } else if (currentValue >= 500) {
            result += 'D';
            currentValue -= 500;
        } else if (currentValue >= 400) {
            result += 'CD';
            currentValue -= 400;
        } else if (currentValue >= 100) {
            result += 'C';
            currentValue -= 100;
        } else if (currentValue >= 90) {
            result += 'XC';
            currentValue -= 90;
        } else if (currentValue >= 50) {
            result += 'L';
            currentValue -= 50;
        } else if (currentValue >= 40) {
            result += 'XL';
            currentValue -= 40;
        } else if (currentValue >= 10) {
            result += 'X';
            currentValue -= 10;
        } else if (currentValue >= 9) {
            result += 'IX';
            currentValue -= 9;
        } else if (currentValue >= 5) {
            result += 'V';
            currentValue -= 5;
        } else if (currentValue >= 4) {
            result += 'IV'
            currentValue -= 4;
        } else if (currentValue >= 1) {
            result += 'I';
            currentValue -= 1;
        }
    }
    return result;
};