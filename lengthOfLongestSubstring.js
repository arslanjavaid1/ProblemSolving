/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    let set = new Set();
    let l = s.length;
    let i = 0;
    let j = 0;
    let max = 0;
    while(j < l) {
        if(!set.has(s.charAt(j))) {
            set.add(s.charAt(j++));
            max = Math.max(max, set.size);
        } else {
            set.delete(s.charAt(i++));
        }
    }
    return max;
};
let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));