const bestSum = (targetSum, array, memo = {}) => {
    if(targetSum in memo)
        return memo[targetSum];
    if(targetSum == 0)
        return []; 
    if(targetSum < 0)
        return null; 
    let shortestComb = null;
    for(let num of array) {
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder, array, memo);
        if(remainderResult !== null){
            const comb = [...remainderResult, num];
            if(shortestComb === null || comb.length < shortestComb.length) {
                shortestComb = comb;
            } 
        }    
        
    }
    memo[targetSum] = shortestComb
    return memo[targetSum];
}

console.log(bestSum(7, [5,3,4,7]));
console.log(bestSum(8, [2,3,5]));
console.log(bestSum(8, [1,4,5]));
console.log(bestSum(100, [1,2,5,25]));
