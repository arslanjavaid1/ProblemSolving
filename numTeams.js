/*
Stringtly increasing subsequence of size 3 or 
Strictly decreasing subsequence of size 3 is a valid team.
We need to find all such subsequences.
*/
/**
 * 1395. Count Number of Teams

 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    // dp1[i] = number of elements less than rating[i] in rating[0...i-1]
    // dp2[i] = number of elements greater than rating[i] in rating[0...i-1]
    let dp1 = new Array(rating.length).fill(0);
    let dp2 = new Array(rating.length).fill(0);
    let count = 0;
    for (let i = 0; i < rating.length; i++) {
        for (let j = 0; j < i; j++) {
            if (rating[j] < rating[i]) {
                dp1[i]++;
                // dp1[j] is the number of elements less than a number, which is less than current number
                // so, if dp1[j] is 1, (lets's say, some number x), then we have a team of (x, rating[j], rating[i])
                // if dp1[j] is 2, (let's say, some number x and y), then we have a team of
                // (x, rating[j], rating[i]) and (y, rating[j], rating[i])
                count += dp1[j]; 
            }
            if (rating[j] > rating[i]) {
                dp2[i]++;
                count += dp2[j];
            }
        }
    }
    return count;
    // T.C: O(N^2)
    // S.C: O(N)
};