/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 166. Fraction to Recurring Decimal

 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0) return "0";
    if(denominator === 0) return `${Math.sign(numerator)}Infinity`;

    let res = "";
    if(Math.sign(numerator) !== Math.sign(denominator)) {
        res += "-";
    }
    
    let n = Math.abs(numerator);
    let d = Math.abs(denominator);
    
    // get integer
    res += Math.floor(n / d);
    n = n % d;
    
    if(n === 0) return res;
    
    res += ".";
    // used to remember all raminders from long division below
    let position = {};
    
    while(n !== 0) {
        position[n] = res.length;
        // long division
        n *= 10;
		// continue to add 
        res += String(Math.floor(n / d));
        n %= d;

        // this is a repeat, since we found a repeating remainder, 
        // we need the index of the remainder we found a match for,
        // and get all values from that index upto current value, not inclusive
        if(position.hasOwnProperty(n)) {
            return `${res.slice(0, position[n])}(${res.slice(position[n])})`
        }
    }

    return res;
};