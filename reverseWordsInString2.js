/**
 * @param {string} s
 * @return {string}
 * 557. Reverse Words in a String III
 * Input: s = "Let's take LeetCode contest"
    Output: "s'teL ekat edoCteeL tsetnoc"

 */
 var reverseWords = function(s) {
    return s.split(' ').map(x => x.split('').reverse().join('')).join(' ');
};