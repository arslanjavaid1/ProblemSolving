var minRemoveToMakeValid = function(s) {
    if(!s) {
        return s;
    }
    let [balance, open, result] = [0,0,[]];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ')') {
            if(balance === 0) {
                continue;
            } else {
                balance--;
            }
        } else if(s[i] === '(') {
            balance++;
            open++;
        }
        result.push(s[i]);
    }
    let openToKeep = open - balance;
    let finalResult = [];
    for(let i = 0; i < result.length; i++) {
        if(result[i] === '(') {
            openToKeep--;
            if(openToKeep < 0) {
                continue;
            }
        }
        finalResult.push(result[i]);
    }
    return finalResult.join('');
};
