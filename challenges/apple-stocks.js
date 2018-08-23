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

function bestProfit(stock) {
  if (!stock || stock.length <= 1) return 0;
  let min = stock[0];
  let max = 0;
  let bestProfit = 0;

  for (let i = 1; i < stock.length; i++) {
    if (stock[i] < min && max !== 0) {
      if (bestProfit < max - min) bestProfit = max - min;
      min = stock[i];
      max = 0;
    }
    else if (stock[i] < min) min = stock[i];
    else if (stock[i] > max) max = stock[i];
  }

  //checks profit if a max was found at the end of the loop
  if (max !== 0 && bestProfit < max - min) bestProfit = max - min;
  return bestProfit;
}

module.exports = bestProfit;
