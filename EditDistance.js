/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 72. Edit Distance
Hard
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
You have the following three operations permitted on a word:
Insert a character
Delete a character
Replace a character
 */
var minDistance = function(text1, text2) {
    let m = text1.length
    let n = text2.length
    let c = new Array(m+1).fill(0)
    c.forEach((x,index)=>{
        c[index] = new Array(n+1)
    })
    let b = []
    for (let j=0;j<=m;j++)
        c[j][0] = j
    for (let j=0;j<=n;j++)
        c[0][j] = j
    
    for (let i=1;i<=m;i++)
        for (let j=1;j<=n;j++) {
            var delta = 0
            if (text1[i-1] != text2[j-1])
                delta = 1
            c[i][j] = Math.min(c[i-1][j]+1,c[i][j-1]+1, c[i-1][j-1]+delta)
        }
        
    return c[m][n]
};
console.log(minDistance("horse", 'ros'))
//
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance_recursive = function(word1, word2) {
    const memo = [];
    for (let i = 0; i <= word1.length; i++) {
      memo[i] = Array(word2.length + 1);
    }
    
    const recurseMinDistance = (i, j) => {
      if (memo[i][j] !== undefined) {
        return memo[i][j];
      }
      
      if (i === 0) {
        return j;
      }
      
      if (j === 0) {
        return i;
      }
      
  
      
      let numOperations;
      if (word1[i - 1] === word2[j - 1]) {
        numOperations = recurseMinDistance(i - 1, j - 1);
      } else {
        const minOperations = Math.min(
          recurseMinDistance(i - 1, j),
          recurseMinDistance(i, j - 1),
          recurseMinDistance(i - 1, j - 1)
        );
        
        numOperations = 1 + minOperations;
      }
      
      memo[i][j] = numOperations;
      return numOperations;
    }
    
    return recurseMinDistance(word1.length, word2.length);
  };