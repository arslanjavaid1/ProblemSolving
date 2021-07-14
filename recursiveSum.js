const recursiveSum = (el, idx = 0) => {
    if(idx === el.length) return 0;
    let first = el[idx];
    return first + recursiveSum(el, idx+1);
}

console.log(recursiveSum([1,5,7,-2]))