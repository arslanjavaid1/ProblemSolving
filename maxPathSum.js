function maxPathSum(ar1, ar2) {
    if (!ar1.length && !ar2.length)
        return 0;
    let i = 0, j = 0;
    let res = 0, sum1 = 0, sum2 = 0;
    let n = ar1.length;
    let m = ar2.length;
    while (i < n && j < m) {
        if (ar1[i] < ar2[j]) {
            sum1 += ar1[i++];
        } else if (ar1[i] > ar2[j]) {
            sum2 += ar2[j++];
        } else {
            res += Math.max(sum1, sum2) + ar1[i];
            sum1 = 0;
            sum2 = 0;
            i++;
            j++;
        }
    }
    while (i < n) {
        sum1 += ar1[i++];
    }
    while (j < m) {
        sum2 += ar2[j++]
    }
    res += Math.max(sum1, sum2);
    return res;
}

let ar1 = [2, 3, 7, 10, 12];
let ar2 = [1, 5, 7, 8];
ar1 = [ 2, 3, 7, 10, 12, 15, 30, 34 ];
ar2 = [ 1, 5, 7, 8, 10, 15, 16, 19 ];

console.log(maxPathSum(ar1, ar2))
