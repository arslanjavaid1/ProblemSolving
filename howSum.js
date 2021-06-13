const howSum = (targetSum, array, memo = {}) => {
    if(targetSum in memo)
        return memo[targetSum];
    if(targetSum == 0)
        return []; 
    if(targetSum < 0)
        return null; 
    for(let num of array) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, array, memo);
        if(remainderResult !== null){
            memo[num] = [...remainderResult, num];
            return memo[num];
        }    
        
    }
    memo[targetSum] = null
    return memo[targetSum];
}

console.log(howSum(7, [5,3,4,7]));
console.log(howSum(7, [2,3]));
console.log(howSum(7, [2,4]));
console.log(howSum(300, [7,14]));
