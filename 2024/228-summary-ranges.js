// Leetcode 228 Summary Ranges solution
summaryRanges =  (nums) => {
    let result = [];
    let min = 0, max = 0;
    let length = nums.length;
    while(min < length) {
        max = min + 1;
        while ( max < length && nums[max - 1] === nums[max] - 1) max++;
        if(min !== max - 1) result.push(nums[min]+"->"+nums[max - 1])
        else result.push(""+nums[min]);
        min = max;
    }
    return result
}

const nums = [0,1,2,4,5,7];
console.log(summaryRanges(nums));