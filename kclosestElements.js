var findClosestElements = function(arr, k, x) { 
    let l = 0, r = arr.length  - k;
    
    while(l<r){
        let mid = ((l+r)/2)|0;
        if(x-arr[mid] <=  arr[mid+k] - x)
            r = mid
        else
            l = mid+1;
    } 
    
    return arr.slice(l,l+k);
};