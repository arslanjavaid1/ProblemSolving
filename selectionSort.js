var sortArraySelection = function(nums) {
    let newNums = [];    
    while(nums.length > 0){
        const smallest = smallestNumber(nums);
        newNums.push(nums[smallest]);
        nums.splice(smallest, 1);
    };
    return newNums;
};
const smallestNumber = (arr) => {
    let small = arr[0];
    let smallIndex = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < small){
            small = arr[i];
            smallIndex = i;
        }
    };
    return smallIndex;
}

const result = sortArraySelection([-2,3,-5]);
console.log(result)
