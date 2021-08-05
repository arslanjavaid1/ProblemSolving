/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    /**
    State Machine with k states using the cost and profit method from https://leetcode.com/submissions/detail/528994085/
    */
    return stateMachine(k, prices)
  };
  
  const stateMachine = (k, prices) => {
    if (k === 0) return 0
  
    const cost = new Array(k).fill(Number.MAX_SAFE_INTEGER)
    const profit = new Array(k).fill(0)
    
    for (let p = 0; p < prices.length; p++) {
      const price = prices[p]
  
      for (let i = 0; i < k; i++) {
        if (i > 0)
          cost[i] = Math.min(cost[i], price - profit[i - 1])
        else
          cost[i] = Math.min(cost[i], price)
  
        profit[i] = Math.max(profit[i], price - cost[i])
      }
    }
  
    return profit.pop()
  }