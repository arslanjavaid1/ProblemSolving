/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    if(strs.length === 0) return strs;
    let final = [];
    for(let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if(!final[sortedStr]) final[sortedStr] =  Array();
        final[sortedStr].push(str); 
    }
    final.map(x => console.log(final[x]));
    return Object.values(final);
};
let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));