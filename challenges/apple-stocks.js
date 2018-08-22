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
    if(stock_prices_yesterday.length === 0) {
        return 0;
    }

    const lowest = {index: -1, value: Infinity};
    const highest = {index: stock_prices_yesterday.length + 1, value: -Infinity};

    for(let i = 0; i < stock_prices_yesterday.length; i++) {
        if(stock_prices_yesterday[i] < lowest.value && i < highest.index){
            lowest.index = i;
            lowest.value = stock_prices_yesterday[i];
        } else if (stock_prices_yesterday[i] > highest.value && i > lowest.index) {
            highest.index = i;
            highest.value = stock_prices_yesterday[i];
        }
    }

    if(lowest.value !== Infinity && highest.value !== -Infinity) {
        return highest.value - lowest.value;
    } else {
        return 0;
    }
}

module.exports = bestProfit;
