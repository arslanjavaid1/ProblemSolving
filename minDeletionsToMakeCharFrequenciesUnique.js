/**
 * @param {string} s
 * @return {number}
1647. Minimum Deletions to Make Character Frequencies Unique
Medium

 
*/
var minDeletions = function (s) {
    if (!s) return 0;
    const map = Array(26).fill(0);
    let sum = 0;
    let mp = new Set();
    for (c of s) {
        map[c.charCodeAt(0) - 'a'.charCodeAt(0)] = (map[c.charCodeAt(0) - 'a'.charCodeAt(0)] || 0) + 1;
    }
    map.sort((a, b) => b - a);
    let min = Infinity;

    for (let i = 0; i < map.length; i++) {
        if (map[i] !== 0) {
            let freq = map[i];
            map[i] = 0;
            while (freq > 0) {
                if (!mp.has(freq)) {
                    mp.add(freq);
                    break;
                }
                sum++;
                freq--;
            }
        }
    }
    return sum;
};
let s = "aab"
s = "aaabbbcc"
s = "ceabaacb"
console.log(minDeletions(s))