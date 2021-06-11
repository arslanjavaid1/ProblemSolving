function findRepeat(numbers) {
    if(numbers.length  == 0)  
        return 0;
    numbers.sort((a,b) => a -b);
    for(let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] == numbers[i + 1])
            return numbers [i];
    }
}
  
let actual = findRepeat([1, 1]);
console.log(actual);
