/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(arr) {
    let n = arr.length;
   let size = 0;
   let result = Array(n);
   for (let num of arr) {
       let [l, h] = [0, size];
       while (l < h) {
           let mid = Math.trunc((l + h) / 2);
           if (result[mid] < num)
               l = mid + 1;
           else
               h = mid;
       }
       result[l] = num;
       if(l === size) {
           size++
       }
   }
   return size;
};

console.log(lengthOfLIS([5, 2, 8, 6, 3, 6, 9, 5]))