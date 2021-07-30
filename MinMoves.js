/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 const minMoves = function (nums, k) {
    const indices = [];
    for (const [i, num] of nums.entries()) {
      if (num) {
        indices.push(i);
      }
    }
    let curMoves = 0,
      mid = Math.floor(k / 2);
    for (let i = 0; i < k; i++) {
      curMoves += Math.abs(indices[i] - indices[mid]) - Math.abs(i - mid);
    }
    let res = curMoves;
    for (let j = k; j < indices.length; j++) {
      const i = j - k;
      curMoves +=
        indices[j] -
        indices[k % 2 === 0 ? mid : mid + 1] -
        (indices[mid] - indices[i]);
      res = Math.min(res, curMoves);
      mid++;
    }
    return res;
  };