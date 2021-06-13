const canConstruct = (target, wordBank, memo = {}) => {
    if(target in memo)
        return memo[target];
    if (target === '') return true;
    if (wordBank.length == 0) return false;
    for(word of wordBank) {
        if(target.indexOf(word) == 0) {
            const remainder = target.slice(word.length);
            if(canConstruct(remainder, wordBank, memo) === true) {
                //return true;
                memo[target] = true;
                return true;
            }
        }
    }
     memo[target] = false
     return false;
}

console.log(canConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(canConstruct("catdog", ['ca', 'do']))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee','eeee', 'eeeee','eeeeee']))