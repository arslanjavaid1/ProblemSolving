const majorityElement = (nums) => {
    let candidate = 0;
    let count = 0;
     for(let num of nums) {
         if(count === 0) candidate = num;
         if(num === candidate) ++count;
         else --count
     }
     return count
}