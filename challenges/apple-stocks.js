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


 // Input: array of stock prices [200, 500, 300, 800, 400]
 // Best profit: buy for $200, sell for $800. Profit is $600
 // buy low, sell high


function bestProfit(stock_prices_yesterday) {
  // invalid input
  if (!Array.isArray(stock_prices_yesterday)) {
    console.log("invalid input");
    return 0;
  }

  stock_prices_yesterday = stock_prices_yesterday.sort(function(a, b) {
    return a - b;
  });

  const min = stock_prices_yesterday[0];
  const max = stock_prices_yesterday[stock_prices_yesterday.length - 1];

  // check if no profit is available (min is equal to max)
  if (min === max) {
    return 0;
  }

  // Return best profit
  return max - min;

}

console.log(bestProfit([200, 500, 300, 800, 400]));

module.exports = bestProfit;
