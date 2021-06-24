var containsDuplicate = function(nums) {
    if(nums.length == 0)
        return 0
    const set = new Set();
    nums.forEach(el => {
        if(set.has(el)){
            return true;
        }
        else {
            set.add(el)
        }
    });
};
console.log(containsDuplicate([1,2,3,1]));