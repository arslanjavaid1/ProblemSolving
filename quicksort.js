var sortArray = function(nums) {
    if(nums.length <= 1)
        return nums;
    else {
        const left = [];
        const right = [];
        const newArray = [];
        const pivot = nums.pop();
        const length = nums.length;
        for(let i = 0; i < length; i++){
            if(nums[i] <= pivot) {
                left.push(nums[i]);
            } else {
                right.push(nums[i]);
            }
        }
        return newArray.concat(sortArray(left), pivot, sortArray(right));
    }
};
const result = sortArray([3, 0, 2, 5, -1, 4, 1 ]);
console.log(result)
