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

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) return 0;
  let low;
  let high;
  const prices = [];
  stock_prices_yesterday.forEach((price, index) => {
    if (index === 0) {
      low = price;
    }
    if (stock_prices_yesterday[index - 1] < price) {
      high = price;
      prices.push(high - low);
    } else if (stock_prices_yesterday[index - 1] > price) {
      low = price;
    }
  });
  if (Math.max(...prices) === Math.min(...prices)) return 0;
  if (prices.length === 0) return 0;
  return Math.max(...prices);
}

module.exports = bestProfit;
