const sortArray = (arr) => {
if(arr.length <= 1) return arr;
return sort(arr, 0, arr.length - 1);
}
const sort = (arr, low, high) => {
    let mid = 0;
    while(mid <= high) {
        if(arr[mid] === 0) {
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            mid++;
            low++
        } else if (arr[mid] === 1)
            mid++;
            else {
                let temp = arr[high];
                arr[high] = arr[mid];
                arr[mid] = temp;
                high --;
            }
    }
    return arr;
}


let arr = [0, 1, 2, 0, 1, 2]

console.log(sortArray(arr))