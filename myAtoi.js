/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function (s) {
    let negative = false;
    let number = "0";
    let i  = 0;
    let n = s.length;
    while( s[i] === ' ') i++;
    if(s[i] === '-' || s[i] === '+') {
        negative = s[i] === '-' ? true : false;
        i++;
    }
    while(i < n && s[i] >= '0' && s[i] <= '9') {
        number += s[i];
        i++;
    }
         
    number = parseInt(number);
    if(number && negative) number = number * -1;
    if(number < -(Math.pow(2, 31))) return -Math.pow(2, 31);
    else if(number > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    else return number;
};