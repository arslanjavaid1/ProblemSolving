/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s) return ""; 
    if(s.length === 1) return s;
    let center = 0;

    let rightBoundary = 0;
    let newString = createNewString(s);
    let palindromLength = Array(newString.length).fill(0);
    for (let i = 0; i < newString.length; i++) {
        let mirror = center -( i - center);
        if (i < rightBoundary) {
            palindromLength[i] = Math.min(rightBoundary - i, palindromLength[mirror]);
        }
        let left = i - (1 + palindromLength[i]);
        let right = i + (1 + palindromLength[i]);
        while (right < newString.length && left >= 0 && newString.charAt(left) === newString.charAt(right)) {
            palindromLength[i] = palindromLength[i] + 1;
            right++;
            left--;
        }

        if (i + palindromLength[i] > rightBoundary) {
            center = i;
            rightBoundary = i + palindromLength[i]
        }
    }
    let max = Math.max(...palindromLength);
    let idx = palindromLength.indexOf(max);
    return newString.substring(idx - max + 1, idx + max).replaceAll('#', '');
}
const createNewString = (s) => {
    let hash = "#";
    for (let c of s) {
        hash += c;
        hash += '#';
    }
    return hash;
}

let s = "babad"
console.log(longestPalindrome(s))