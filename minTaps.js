/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 1326. Minimum Number of Taps to Open to Water a Garden
Hard


 */
var minTaps = function(n, ranges) {
    // dp[i] means how many taps are used to water [0, i]
    const dp = [0]
    for(let i=1; i<=n; i++) {
        dp.push(n+2)
    }
    for(let i=0; i<=n; i++) {
        const [leftMost, rightMost] = [Math.max(i-ranges[i], 0), Math.min(i+ranges[i], n)]
        for(let j=1+leftMost; j<=rightMost; j++) {
            dp[j] = Math.min(dp[j], dp[leftMost] + 1)
        }
    }
    return dp[n] === n+2? -1: dp[n]
};


var minTaps = function(n, ranges) {
  if(Math.max(...ranges) == 0) return -1; // edge case
  
  ranges = ranges
    .map((val, id)=>[Math.max(0, id-val), Math.min(n, id+val)]) // make ranges into intervals [start, end]
    .filter((val)=>val[0] != val[1]) // optimization: remove the intervals with same start and end, since it won't help us at all
    .sort((a,b)=>{ // sort by start and then descending [optional] end
      if(a[0]==b[0]) return b[1]-a[1];
      return a[0]-b[0];
    });
  
  let rangelen = ranges.length;
  let covered = 0, res = 0, i=0;
  // covered = the covered range so far
  // res = number of taps used
  // i = which index of ranges array we are on
  while(i < rangelen && covered < n){ 
    let end = covered;
    while(i < rangelen && ranges[i][0] <= covered){
      end = Math.max(end, ranges[i][1]); // find the largest end that we can possibly proceed 
      i++;
    }
    if(end == covered) return -1; // we didn't find any end that allows us to move forward
    covered = end;
    res++;
  }
  
  return covered >= n ? res : -1; // in case we exited out of while loop because we are done iterating ranges but not done covering
};