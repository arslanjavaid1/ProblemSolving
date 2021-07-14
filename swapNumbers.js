const swapNumbers = (digits) => {
    digits = digits.toString();
    let number = [];
    let n = digits.length;
    for (let i = 0; i < n; i++)
        number[i] = Number(digits[i]);
    
    for (var i = n - 1; i >= 0; i--) {
        if (number[i] > number[i - 1])
            break;
    }
    if (i == 1 && number[i] <= number[i - 1])
    {
        console.log("Next number not possible");
        return;
    }   
    let x = number[i - 1];
    let smallest = i;
     
    for(let j = i + 1; j < n; j++)
    {
        if (number[j] > x &&
            number[j] < number[smallest])
        smallest = j;
    }
     
    // Swapping the above found smallest
    // digit with (i-1)'th
    let temp = number[smallest];
    number[smallest] = number[i - 1];
    number[i - 1] = temp;
     
    // X is the final number, in integer datatype
    x = 0
     
    // Converting list upto i-1 into number
    for(let j = 0; j < i; j++)
        x = x * 10 + number[j];
     
    // Sort the digits after i-1 in ascending order
    number = number.slice(i, number.length + 1);
    number.sort()
     
    // Converting the remaining sorted
    // digits into number
    for(let j = 0; j < n - i; j++)
        x = x * 10 + number[j];
        return x;

}
console.log(swapNumbers(3424861));