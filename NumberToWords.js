/**
 * @param {number} num
 * @return {string}
 */
 const wordMapping = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    100: "Hundred"
}
let numArray = [
    "Billion",
    "Million",
    "Thousand"
];
const getHundreds = (num) =>  {
    const output = [];
    const hundred = Math.trunc(num / 100);
    if(hundred) {
        output.push(wordMapping[hundred]);
        output.push('Hundred');
    }
    const tenth = num % 100;
    if(!tenth) return output;
    if(tenth < 10) {
        output.push(wordMapping[tenth]);
        return output;
    }
    if(tenth < 20) {
        output.push(wordMapping[tenth]);
        return output;
    }
    let nums = Math.trunc(tenth / 10) * 10;
    output.push(wordMapping[nums]);
    const unit = tenth % 10;
    if(unit) output.push(wordMapping[unit]);
    return output;
}
var numberToWords = function (num) {
    if (num === 0) return "Zero";
    if(num <= 20) return wordMapping[num]; 
    let output = [];
    let divideBy = Math.pow(1000, numArray.length);
    numArray.forEach((thousand) => {
        let thousandTh = Math.trunc(num / divideBy);
        if(thousandTh) {
            output = output.concat(getHundreds(thousandTh));
            output.push(thousand);
        }
        num = num % divideBy;
        divideBy = Math.trunc(divideBy / 1000);
    });
    output = output.concat(getHundreds(num));
    return output.join(' ');
};

console.log(numberToWords(123))

console.log(numberToWords(123))
