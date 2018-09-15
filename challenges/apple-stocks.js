

function bestProfit(stock_prices_yesterday) {

    let firstPrice = stock_prices_yesterday[0];
    let minMaxObj = {};
    let profit = 0;
    let max = 0;
    let min = 0;

    if (Array.isArray(stock_prices_yesterday) === false) return profit;
    //console.log('we made it')


    for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
        if (typeof stock_prices_yesterday[i] !== 'number') return profit;
    }

    


    for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
                
        if (stock_prices_yesterday[i] > max) {
            //console.log(stock_prices_yesterday[i])
            max = stock_prices_yesterday[i]
            //console.log(stock_prices_yesterday.max)
        } else if (stock_prices_yesterday[i] < min) {
           min = stock_prices_yesterday[i]
        }
    }

   console.log(min)
   console.log(max)

    if (firstPrice >=max) return 0;



    profit = max - min;

    return profit;

}

console.log(bestProfit([1,2,3,4,5,6,7,8,9]))

module.exports = bestProfit;
