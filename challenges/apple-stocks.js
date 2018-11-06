/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

// Check if price <= 500;
// Check to see if any of the values after index[0] are greater than it's value if not then return 0.
// If that is not true then check each index starting at [0] and check for greatest positive differences between that position and every other index.
// Store that value in a variable and then repeat at next index an compare that highest value vs the store variable.
// Run reduce function over the array and check if every value of the array is <= to the array[0] value return 0 else start comparing index by index.
// Check the array for the most positive difference in value, no negatives allowed.

function bestProfit(stock_prices_yesterday) {
  let highest;
  let lowest;
    for (let i = 0; i < stock_prices_yesterday.length; i++) {
        if (stock_prices_yesterday[i] <= stock_prices_yesterday[0]) {
            return false;
        } else if () {

        }
  }
}

module.exports = bestProfit;
