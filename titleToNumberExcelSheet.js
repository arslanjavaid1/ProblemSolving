/**
 * @param {string} columnTitle
 * @return {number}
 * 
 * 171. Excel Sheet Column Number
Input: columnTitle = "A"
Output: 1
Input: columnTitle = "FXSHRXW"
Output: 2147483647

 */
 var titleToNumber = function(s) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    s=s.split('');
    let l=s.length;
    let sum=0;
    for(let i=0;i<l;i++){
        sum+=Math.pow(26,l-i-1)*(alphabet.indexOf(s[i]) + 1);
    }
    return sum;
};
