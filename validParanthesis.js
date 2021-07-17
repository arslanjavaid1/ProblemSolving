/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s) return false;
    const map = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if( s[i] === "(" || s[i] === "{" || s[i] === '[') {
            stack.push(s[i]);
        } else {
            let val = stack.pop();
            if(map[s[i]] !== val) return false;
        }
    }
    return stack.length === 0 ;
};

console.log(isValid('()'))