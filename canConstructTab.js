const canConstruct = (s, arr) => {
    const dp = Array(s.length + 1).fill().map(()=>[]);
    dp[0] = [[]];
    let n = s.length;
    for (let i = 0; i < arr.length; i++) {
        for (word of arr) {
            let a = word.length;
            if (s.slice(i, i + a) === word) {
                let newComb = dp[i].map(subArray => [...subArray, word]);
                dp[i + a].push(...newComb);
            }
        }
    }
    return dp[n];
}

console.log(canConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl']))