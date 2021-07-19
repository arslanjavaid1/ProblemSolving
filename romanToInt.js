/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        'I' : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D": 500,
        "M": 1000
    };
    let sArr =  s.split('');
    let sum = 0;
    for(let i = sArr.length - 1; i >= 0; i--) {
        let  val = map[sArr[i]];
        let nextVal = map[sArr[i - 1]];
        if(nextVal < val) {
            val = val - nextVal;
            i--;
        }
        sum += val;
    }
    return sum;
};

let  s = "MCMXCIV";
console.log(romanToInt(s))

