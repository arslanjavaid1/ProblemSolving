/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    if (s.length === 0 || s.length < 4)
        return [];
    const res = [];
    backtrack(s, "", res, 0);
    return res;
};

const backtrack = (s, tmp, res, n) => {
    if (n === 4) {
        if (s.length === 0) res.push(tmp.substr(0, tmp.length - 1));
        return;
    }
    for(let k = 1; k <=3; k++) {
        if(s.length < k) continue;
        let val =  parseInt(s.substr(0,k));
        if(val > 255 || k != val.toString().length) continue;
        backtrack(s.substr(k), tmp+s.substr(0,k)+".", res, n+1);
    }
}

    let s = "25525511135";
    console.log(restoreIpAddresses(s))