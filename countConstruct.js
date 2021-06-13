const countConstruct = (target, wordBank, memo = {}) => {
    if(target in memo)
        return memo[target];
    if (target === '') return 1;
    if (wordBank.length == 0) return false;
    let count = 0;
    for(word of wordBank) {
        if(target.indexOf(word) == 0) {
            const remainder = target.slice(word.length);
            const reminderCount = countConstruct(remainder, wordBank, memo);
            if( reminderCount != 0) {
                count++;
                //return true;
                memo[target] = count;
            }
        }
    }
     memo[target] = count;
    return memo[target];
}

console.log(countConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(countConstruct("catdog", ['ca', 'do']))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee','eeee', 'eeeee','eeeeee']))