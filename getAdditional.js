
/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
// function getMaxAdditionalDinersCount(N, K, M, S) {
//     if (N === 0)
//         return 0;
//     let max = 0;
//     S.sort();
//     let j = 0;
//     let i = 1;
//     while (i <= N) {
//         if ((i + K + 1) >= S[j] || (i + K) > S[j] - K) {
//             i = S[j];
//             j++;
//             continue;
//         } else {
//             max++;
//             i = i + K + 1;
//             continue;   
//         }
//     }
//     return max;
// }


/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
 function getMaxAdditionalDinersCount(N, K, M, S) {
    if (N === 0)
        return 0;
    let max = 0;
    S.sort();
    let j = 0;
    for (let i = 1; i <= N; i++) {
        if (i + K + 1 === S[j] || S[j] - (K + 1) === (i + K + 1) || S[j - 1] + K + 1 === S[j] - (K + 1)) {
            i = S[j] + 1;
            j++;
        } else {
            i = i + K + 1;
            max++;
        }
    }
    return max - 1;
}

let N = 10
K = 1
M = 2
S = [2, 6];

// N = 15
// K = 2
// M = 3
// S = [11, 6, 14]
console.log(getMaxAdditionalDinersCount(N, K, M, S));



