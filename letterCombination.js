/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits)
        return [];
        
    const letterCombination = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]

    let result = Array();
    let digitsArray = digits.split('');
    const backTrack = (digitsArray, prefix, index, result) => {
        if (index >= digitsArray.length) {
            result.push(prefix);
            return;
        }
        let letters = letterCombination[digitsArray[index - '0']].split('');
        for(let i = 0; i < letters.length; i++) {
            backTrack(digitsArray, prefix.concat(letters[i]), index+1, result );
        }
    }
    backTrack(digitsArray, "", 0, result);
    return result;
};

console.log(letterCombinations("23"));