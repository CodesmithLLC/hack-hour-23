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

function bestProfit(prices) {
  
  if (!Array.isArray(prices)) return 0;
  
  let dif = 0;
  let maxDif = 0;

  for (let i = 0, j = 1; j < prices.length; i++, j++) {
    dif += (prices[j] - prices[i])
    if (dif < 0) dif = 0;
    if (dif > maxDif) maxDif = dif;
  }
  return maxDif;
}

module.exports = bestProfit;
