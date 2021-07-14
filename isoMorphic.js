/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let arr1 = [], arr2 = [];
    for (let i = 0; i < s.length; i++) {
        sLetter = s.charAt(i);
        tLetter = t.charAt(i);
        if (arr1[sLetter] !== arr2[tLetter]) return false;
        arr1[sLetter] = i + 1;
        arr2[tLetter] = i + 1;
    }
    return true;
};

console.log(isIsomorphic("badc", "baba"))