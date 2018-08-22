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

  if(stock_prices_yesterday.indexOf(Math.max(...stock_prices_yesterday)) === 0) return 0;

  let lowestPrice = stock_prices_yesterday[0];
  let peakPrice = stock_prices_yesterday[0];
  let maxProfit = 0;

  for(let x = 0; x < stock_prices_yesterday.length; x +=1){
    let currentPrice = stock_prices_yesterday[x];
    if(currentPrice < lowestPrice){
      lowestPrice = currentPrice;
    }
    if(currentPrice > peakPrice){
      maxProfit = currentPrice - lowestPrice;
      peakPrice = currentPrice;
    }
  }
  return maxProfit;
}


// const stock = [140,120,130, 150,120,170];
// // const stock = 'hello'
// console.log(bestProfit(stock));

module.exports = bestProfit;
