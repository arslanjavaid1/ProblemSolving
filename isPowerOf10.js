/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOf10 = function(n) {
    if (n <= 0) return false;
    return Number.isInteger(Math.log10(n)/Math.log10(10))
};

console.log(isPowerOf10(2));