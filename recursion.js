const factorial = (x) => {
    if (x == 1)
        return 1;
    else
    return x * factorial(x-1);
}

let result = factorial(120);


 function sum (arr, totalsum) {
    if(arr.length == 0) return totalsum;
    totalsum = totalsum + arr[0];
    arr.splice(0,1);
    return sum(arr, totalsum);
}
const resultData = sum([2,4,6,8,100], 0);
console.log(resultData);
