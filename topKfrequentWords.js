/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    if(words.length === 0) return [];
    let map = new Map();
    for(let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    return([...map.entries()].sort((a, b) => {
        return a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1]-a[1];
    })).splice(0,k).map(k => k[0]);
    
};

let s = ["i", "love", "leetcode", "i", "love", "coding"], k = 3;
//s = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
console.log(topKFrequent(s,k))