/**
 * @param {string} s
 * @return {string}
 */
 var shortestPalindrome = function(s) {
    if(!s) return "";
    let str = `${s}#${s.split('').reverse().join('')}`;
    let index = kmp(str);
    return str.substr(s.length + 1, s.length - index) +s;
};

const kmp = (str) => {
    let arr = Array(str.length).fill(0);
    for(let i = 1; i < str.length; i++) {
        let k = arr[i - 1];
        while(k > 0  && str[k] !== str[i]) k = arr[k - 1];
        arr[i] += (k+= str[k] === str[i] ? 1 : 0);
    }
 return   arr[str.length - 1]
}

console.log(shortestPalindrome("aacecaaa"));