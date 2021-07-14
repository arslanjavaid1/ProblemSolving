/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let arr = num.toString();
    arr = arr.split('');
    let max = -1;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] >= arr[i-1]) {
            if(max === -1 && arr[i] !== arr[i-1]) {
                max = i;
            } else if(max !== -1){
                max = arr[i] >= arr[max] ? i : max; 
            }
        }
    }
    //console.log(max);
    for(let i = 0; i < arr.length; i++) {
        if((arr[i] < arr[max]) && (i < max)) {
            const temp = arr[i];
            arr[i] = arr[max];
            arr[max] = temp; 
            break;
        }
    }
    return parseInt(arr.join(''));
    
};