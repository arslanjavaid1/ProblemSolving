const allConstructs = (target, wordBank, memo = {}) => {
    if(target in memo)
        return memo[target];
    if (target === '') return [[]];
    if (wordBank.length == 0) return [];
    const finalResult = []
    for(word of wordBank) {
        if(target.indexOf(word) == 0) {
            const remainder = target.slice(word.length);
            const reminderCount = allConstructs(remainder, wordBank, memo);
            const targetWays = reminderCount.map(way => [word, ...way]) 
            finalResult.push(...targetWays);
        }
    }
     memo[target] = finalResult;
    return finalResult;
}

console.log(allConstructs("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(allConstructs("catdog", ['ca', 'do']))
console.log(allConstructs("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee','eeee', 'eeeee','eeeeee']))