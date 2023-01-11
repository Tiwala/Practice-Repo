// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

var coinChange = function(coins, amount) {
    // memoizer
    // amount + 1 to cover for index zero
    let storage = new Array(amount + 1).fill(Infinity);
    // Necessary to make sure the first index is 0 and not infinity and indices match with amount
    storage[0] = 0
    for (let coin of coins) {
        for (let j = 0; j < storage.length; j++) {
            // If the current coin can subtract from the value, i.e. if the coins could add up to it
            if (coin <= j) {
                // Memoizes storage[j] to be value of amount input
                // 1 + storage[j - coin] makes sure that this value doesn't become 0, this is the count for how many coins used
                storage[j] = Math.min(storage[j], 1 + storage[j - coin])
            }
        }
    }
    // If the storage[amount] is Infinity, it means that the coins couldn't have added up to it
    if (storage[amount] != Infinity) {
        return storage[amount];
    } else {
        return -1
    }
};
