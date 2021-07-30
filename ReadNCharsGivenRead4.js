/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
 var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    
    const myBuf = [];
    return function(buf, n) {
     while(buf.length < n) {
         if(!myBuf.length) {
             read4(myBuf);
         }
         buf.push(myBuf.shift());
     }
    };
};