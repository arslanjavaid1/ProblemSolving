/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    if(!s) return "";
    const n = s.length;
    s = s.split('');
    for(let i = 0; i < n; i++) {
        if(s[i] === '?'){
            for(let c = 0; c < 3;c++) {
                if(i > 0 && s[i - 1].charCodeAt(0) - 'a'.charCodeAt(0) === c) continue;
                if(i + 1 < n && s[i + 1].charCodeAt(0) - 'a'.charCodeAt(0) === c)continue;
                s[i] = String.fromCharCode('a'.charCodeAt(0) + c);
                break;
            }
        }
    }
    return s.join('');
};

let  s = "?zs"
s = "j?qg??b"
console.log(modifyString(s))