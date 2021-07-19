let result;
var letterCombinations = function (digits) {
    if (!digits) return "";
    result = [];
    let digitsArray = digits.split('');
    let letters = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    const backtrack = (digitsArray, index, prefix, result) => {
        if (prefix.length >= digits.length) {
            result.push(prefix);
            return;
        }
        let lettersArr = letters[digitsArray[index - '0']].split('');
        for(let i = 0; i < lettersArr.length; i++) {
            backtrack(digitsArray, index + 1, prefix.concat(lettersArr[i]), result);
        }
     }
     backtrack(digitsArray, 0, "", result);
     return result;

}
let digits = "23";
console.log(letterCombinations(digits));