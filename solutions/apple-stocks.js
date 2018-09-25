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

}

//---------------------------------------------------------------

// brute force solution, N^2
function bestProfit(arr) {
  // include guard clauses
  if (!Array.isArray(arr) || !arr[0]) return 0;

  // iterate and calculate the maxes at each stage
  const maxProfits = arr.reduce((profits, stock, i) => {
    let sub = arr.slice(i);
    let profit = Math.max(...sub) - stock;
    profits.push(profit);
    return profits;
  }, [])

  // return the max of maxes
  return Math.max(...maxProfits);
}

//---------------------------------------------------------------

// better solution
function bestProfit(arr) {
  // include guard clauses
  if (!Array.isArray(arr) || !arr[0]) return 0;

  // keep track of possible max, current max, and the index of minimum
  let possibleProfit = 0;
  let maxProfit = 0;
  let minIndex = 0;

  // iterate the arr
  arr.forEach((stock, i) => {
    // calculate the min
    if (stock < arr[minIndex]) minIndex = i;

    // recalculate the possible profit
    possibleProfit = stock - arr[minIndex];

    // check if its a new max
    if (possibleProfit > maxProfit) maxProfit = possibleProfit;
  })

  // return max profit
  return maxProfit;
}

module.exports = bestProfit;
