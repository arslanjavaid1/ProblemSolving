const minSteps = (array) => {
    if(array.length < 2) return 0;
    array.sort((a,b) => a - b);
    let count = 0;
    for(let i = array.length - 1; i > 0; i--) {
        if(array[i - 1] < array [i]) {
            count += array.length - i;
        }
    }
    return count;
}
console.log(minSteps([5, 2, 1]));