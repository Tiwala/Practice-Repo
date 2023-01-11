// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

let time = '12:00:00AM'

function timeConversion(s) {
    // Write your code here
    // Changes the first 2 digits into an integer
    let num = Number(s.slice(0, 2))

    // s[s.length-2] checks for if it's P or A, checks for time
    // If it's PM and it's less than 12, it converts it into PM time
    if (s[s.length-2] === 'P' && num < 12) {
        num = num + 12;
        return (num.toString()).concat(s.slice(2, s.length - 2))
    // Checks if it's am AND 12, so that it covers for after midnight
    } else if (s[s.length - 2] === 'A' && num === 12) {
        num = num - 12;
        return (num.toString().concat('0')).concat(s.slice(2, s.length - 2))
    } else {
        // If it's AM, we good bruh
        return s.slice(0, s.length - 2);
    }
}

console.log(timeConversion(time))