/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s) return "";
    if (s.length === 1) return s;
    const newString = getModifiedString(s);
    let p = Array(newString.length).fill(0);
    let c = 0;
    let r = 0;
    for (let i = 0; i < newString.length; i++) {
        let idxMirror = 2 * c - i;
        if (i < r) p[i] = Math.min(r - i, p[idxMirror]);
        let right = i + (p[i] + 1);
        let left = i - (p[i] + 1);
        while (right < newString.length && left >= 0 && newString[left] === newString[right]) {
            p[i]++;
            right++;
            left--;
        }
        if(i + p[i] > r) {
            c = i;
            r = p[i] + i;
        }
    }
    let length = Math.max(...p);
    let idx = p.indexOf(length);
    return newString.substring(idx - length + 1, idx + length).replaceAll('#', '');

}
const getModifiedString = (s) => {
    let newHash = '#';
    for (let c of s) {
        newHash += c;
        newHash += '#'
    }
    return newHash;
}
let s = "babad"

console.log(longestPalindrome("babad"));