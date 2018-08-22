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
  if(!stock_prices_yesterday || !Array.isArray(stock_prices_yesterday)) return 0;

  return stock_prices_yesterday.reduce((maxPrice, currentPrice) =>{
    if(currentPrice > maxPrice) maxPrice = currentPrice;

    return maxPrice;
  }, 0);
}


// const stock = [10,20,30,40,50,60,700,70,80,90,100,150];
// const stock = 'hello'
// console.log(bestProfit(stock));

module.exports = bestProfit;
