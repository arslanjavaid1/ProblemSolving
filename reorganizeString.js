/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (st) {
    if (!st) return "";
    const s = {};
    for (let c of st) {
        s[c] = (s[c] || 0) + 1;
    }
    let stc = Object.keys(s).sort((a, b) => s[b] - s[a]);
    let res = [];
    let index = 0;
    for (let i = 0; i < st.length; i++) {
        let occ = s[stc[i]];
        if(occ > parseInt((st.length + 1)/2)) return ;
        for(let j = 0; j < occ; j++) {
            if(index >= st.length) index = 1;
            res[index] = stc[i];
            index += 2;
        }
    }
    return res.join('');
};
let s = "aab";
console.log(reorganizeString(s))