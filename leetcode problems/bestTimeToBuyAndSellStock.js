// only worry about the profit
const maxProfit = (prices) => {
    // record the lowest day and the max profit
    let lowest = prices[0];
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i];
        }
        if ((prices[i] - lowest) > profit) {
            profit = prices[i] - lowest;
        }
    }
    return profit;
};

console.log(maxProfit([2, 4, 1]));


// this shit didn't work and is ass and overcomplicated
// var maxProfit = function(prices) {
//     let lowest = prices[0];
//     let lowestDay = 0;
//     let highest = 0
//     let highestDay = 0;
//     let prevProfit = 0;
//     let currentProfit = 0;
    
//     for (let [day, price] of prices.entries()) {
        
//         if (price < lowest) {
//             lowest = price;
//             lowestDay = day
//         } else if (price > lowest && price > highest) {
//             highest = price;
//             highestDay = day;
//         }
//     }
//     if (lowestDay >= highestDay) {
//         return 0;
//     } else {
//         return highest - lowest;
//     }
// };