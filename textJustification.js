/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    if (!words.length) return [];
    let i = 0;
    let n = words.length;
    let lineLength = 0;
    let spacesRequired = 0;
    let result = []
    while (i < n) {
        let j = i + 1;
        lineLength = words[i].length;
        while (j < n && (lineLength + words[j].length + (j - i - 1)) < maxWidth) {
            lineLength += words[j].length;
            ++j;
        }
        let numOfWords = j - i;
        spacesRequired = maxWidth - lineLength;
        if (numOfWords === 1 || j >= n) {
            
            result.push(rightJustify(words, i, j, spacesRequired));
        } else {
            result.push(leftJustify(words, i, j, spacesRequired))
        }
        i = j;
    }
    return result;
};

const leftJustify = (words, i, j, spacesRequired) => {
    let res = words[i];
    let diff = j - i - 1;
    let spaces = Math.floor(spacesRequired / diff);
    let extra = spacesRequired % diff;
    console.log(extra)
    for (let k = i + 1; k < j; ++k) {
        let nSpaces = spaces + (extra-- > 0 ? 1 : 0);
        res += " ".repeat(nSpaces) + words[k];
    }
    return res;
}
const rightJustify = (words, i, j, spacesRequired) => {
    spacesRequired = spacesRequired - (j - i - 1);
    let res = words[i];
    for (let k = i + 1; k < j; ++k) {
        res +=" " + words[k];
    }
    res+= ` `.repeat(spacesRequired);

    return res
}

let words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
console.log(fullJustify(words, maxWidth))