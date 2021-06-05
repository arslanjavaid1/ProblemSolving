function getMaxProfit(stockPrices) {
    if(stockPrices.length < 2)
        throw new Error();
    
    let min = stockPrices[0];
    let max = stockPrices[1] - stockPrices[0];
    for(let i = 1; i < stockPrices.length; i++){
    const currentPrice = stockPrices[i];
    const potentialProfit = currentPrice - min;
    max = Math.max(potentialProfit, max);
    min = Math.min (currentPrice, min);
     }
     return max;
    }
    
  let desc = 'price goes up then down';
  let actual = getMaxProfit([1, 5, 3, 2]);
  console.log(actual);