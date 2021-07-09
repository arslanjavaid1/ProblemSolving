const Coins = [25, 10, 5, 1];
const numCoins = (c) => {
    if(c === 0)
        return 0;
    return makeChange(c, Coins, 0)
}

let makeChange = (c ,Coins, index, memo = {}) => {
    let key = [c,index].join('');
    if(key in memo)
        return memo[key];
    if( index >= Coins.length - 1 ) return 1;
    let amnt = Coins[index];
    let ways = 0;
    for(let i = 0; i * amnt <= c; i++) {
        let remaining = c - i * amnt;
        ways += makeChange(remaining, Coins, index + 1);
    }
    memo[key] = ways
    return ways;
}
 
let cents = 5;
console.log(numCoins(10))