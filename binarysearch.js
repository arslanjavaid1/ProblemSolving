
var search = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;
    while( low <= high ){
        var mid = Math.floor((high + low) / 2);
        if(nums[mid] == target)
            return mid;
        else if (nums[mid] < target) 
            low = mid + 1;
        else if (nums[mid] > target)
            high = mid;
    }
    return -1;
};
const result = search([-1,0,3,5,9,12], 9);
console.log(result)