var lengthOfLongestSubstringKDistinct = function(s, k) {
    if(s.length === 0 || typeof s !== 'string') return 0;
    let map = new Array(256).fill(0);
    let i = 0, count = 0, res = 0;
    for(let j = 0; j < s.length; j++) {
        if(map[s.charAt(j).charCodeAt(0)]++ === 0) count++;
        if(count > k) {
            while(--map[s.charAt(i++).charCodeAt(0)] > 0) ;
            count--;
        }
        res = Math.max(res, j - i + 1);
    }
    return res;
};