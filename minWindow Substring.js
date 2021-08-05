/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    const map = Array(128).fill(0);
    const refPoint = "A".codePointAt(0);
    for (let i = 0; i < t.length; i++) {
        map[t.codePointAt(i) - refPoint]++;
    }
    
    // let ss = "";
    // for(let i = 0; i < 128; i++) {
    //     ss = ss + " " + map[i];
    // }
    // console.log(ss);
    
    let i = 0;
    let j = 0;
    let d = Number.MAX_VALUE;
    let head = 0;
    let counter = t.length;
    while (j < s.length) {
        if (map[s.codePointAt(j) - refPoint]-- > 0) counter--;
        
        while (counter == 0) { // valid
            if (j + 1 - i < d) {
                head = i;
                d = j + 1 - i;
            }
            if (map[s.codePointAt(i) - refPoint] == 0) {
                counter++;
            }
            
            map[s.codePointAt(i) - refPoint]++;
            i++;
        }
        
        j++;
    }
    
    // console.log(d);
    
    return d === Number.MAX_VALUE ? "" : s.substring(head, head + d);
};
let s = "ADOBECODEBANC", t = "ABC";
console.log(minWindow(s, t))