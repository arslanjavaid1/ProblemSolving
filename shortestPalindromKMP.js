/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    if(!s) return "";
    let rev = s.split('').reverse().join('');
    let ls = s + '#' + rev
    let l = ls.length;
    let p = Array(l).fill(0);
    for(let i = 1; i  < l; i++) {
        let j = p[i - 1];
        while(j > 0 && ls.charAt(i) !== ls.charAt(j))
            j = p[j - 1];
        if(ls.charAt(i) === ls.charAt(j)){
            p[i] += j + 1;
        }
            
    }
    return rev.substring(0, (s.length - p[l - 1])) + s;
};


console.log(shortestPalindrome("abcd"));