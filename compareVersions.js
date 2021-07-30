/**
 * Given two version numbers, version1 and version2, compare them.

Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

Return the following:

If version1 < version2, return -1.
If version1 > version2, return 1.
Otherwise, return 0.
 

Example 1:

Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    console.log(v1)
    console.log(v2)
    let length = Math.max(v1.length, v2.length);
    for(let i = 0; i < length; i++) {
        let ver1 = i < v1.length ? parseInt(v1[i]) : 0;
        let ver2 =  i < v2.length ? parseInt(v2[i]) : 0;
        if(ver1 === ver2) continue;
        if(ver1 > ver2) return 1;
        if(ver1 < ver2) return -1
    }
    return 0;
};
version1 = "1.01", version2 = "1.001"

console.log(compareVersion(version1, version2))