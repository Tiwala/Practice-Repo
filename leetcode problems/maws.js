// write a program that takes a list of profit made for 1 week, print to the console the total profit made
// for that week, and the average profit made per day of that week

// profits is an array
function profitPrinter(profits) {
    let totalProfits = 0;
    for (let i = 0; i < profits.length; i++) {
        totalProfits = totalProfits + profits[i];
    }

    console.log(totalProfits);
    console.log((totalProfits/profits.length).toFixed(2))

    // return profits
}

console.log(profitPrinter([5324,
    2365,
    2352,
    3256,
    2352,
    2341,
    2523]))