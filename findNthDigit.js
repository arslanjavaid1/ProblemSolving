/**
 * @param {number} n
 * @return {number}
 */
 var findNthDigit = function(n) {
    let [start, count, length] = [1, 9, 1];
    while(n > (count*length)) {
        n -= (count*length);
        length++;
        count *= 10;
        start *= 10;
    }
    start += (Math.trunc((n-1)/length));
    const str = start.toString();
    return str.charCodeAt((n-1)%length)- '0'.charCodeAt(0);
};
console.log(findNthDigit(11));