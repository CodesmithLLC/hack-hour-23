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
    let stocks = stock_prices_yesterday;
    //find lowest
    let high = 0;
    for(let i in stocks){ if(stocks[i] > high) high = i }
    
    let low = 0;
    for(let i in stocks){ if(stocks[i] < low) low = i }
    //find highest

    if(low < high){ return [low, high] }
    else if (low > high){
        return bestProfit(stocks.splice(low, 1));
    }


    //see if lowest comes before highest
    //if so, return that pair of indeces
    //otherwise, remove the lowest and try again


}

module.exports = bestProfit;
