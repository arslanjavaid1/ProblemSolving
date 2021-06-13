const canSum = (targetSum, array, memo = {}) => {
    if(targetSum in memo)
        return memo[targetSum];
    if(targetSum == 0)
        return true; 
    if(targetSum < 0)
        return false; 
    for(let num of array) {
        const remainder = targetSum - num;
        
       if(canSum(remainder, array, memo ) === true){
           memo[targetSum]  = true;
            return true;
        }
    }
    memo[targetSum]  = false;
    return false;
}

console.log(canSum(7, [5,3,4,7]));
console.log(canSum(7, [2,3]));
console.log(canSum(7, [2,4]));
console.log(canSum(300, [7,14]));
