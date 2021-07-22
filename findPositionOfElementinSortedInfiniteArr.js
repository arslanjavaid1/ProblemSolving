const findPosition = (arr, target) => {
    let low = 0;
    let high = 1;
    let val = arr[0];
    while(val < target){
        low = high;
        high = high * 2;
        val = arr[high]
        
    }
    return binarySearch(arr, low, high, target);
}

const binarySearch = (arr, low, high, target) => {
    if(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target)
          return mid;
        else if( arr[mid] < target)
            return  binarySearch (arr, mid + 1, high, target)
        else 
           return binarySearch(arr, low, mid - 1, target);
    }
    return - 1;
}
let arr = [3, 5, 7, 9, 10, 90, 100, 130,
    140, 160, 170];
console.log(findPosition(arr, 10));
