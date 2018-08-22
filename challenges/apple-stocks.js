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

const stock_prices_yesterday = [225, 2, 900, 46, 20, 258, 4, 500, 3, 2]

function bestProfit(stock_prices_yesterday) {
  //reduce through the stock prices to track maxProfit as we iterate. 
  const stockReducer = stock_prices_yesterday.reduce((ac, cv) => {
    const potentialProfit = cv - Math.min(...ac[0]);
    if (potentialProfit > maxProfit) maxProfit = potentialProfit
    ac[0].push(cv)
    return [ac[0], maxProfit]
  }, [[stock_prices_yesterday[1]], maxProfit = 0])
  return stockReducer[1]
}

console.log(bestProfit(stock_prices_yesterday))

module.exports = bestProfit;
