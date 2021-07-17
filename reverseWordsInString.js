/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if(!s) return "";
    let string = s.trim().split(' ');
    let returnval = []
    for(let i = string.length -1 ; i >= 0; i--) {
        if(string[i] === ' ' || string[i] === '') continue;
        else
        returnval.push(string[i]);
    }
    return returnval.join(' ');
};
var _reverseWords = function(s) {
    if(!s) return "";
    return s.split(' ').reverse().filter(x => x !== '').join(' ');
};

let s = "a good   example"
console.log(_reverseWords(s))