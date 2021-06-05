function hasPalindromePermutation(theString) {
    const set = new Set();
    for (char of theString) {
        if (set.has(char)) {
            set.delete(char);
        }
        else set.add(char)
    }
    return set.size <= 1
}

let actual;
actual = hasPalindromePermutation('aabcbcd');
console.log(actual)

