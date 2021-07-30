/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
10. Regular Expression Matching 
*/
var isMatch = function (s, p) {
    let memo = [];
    const dfs = (i, j) => {
        let key = [i, j].join(',');
        if(key in memo) return memo[key];
        if (i >= s.length && j >= p.length) return true;
        if(j >= p.length) return false;
       let match = i < s.length && (s[i] === p[j] || p[j] === '.');
        if(j + 1 < p.length && p[j + 1] === '*' ) {
            memo[key] = dfs(i , j + 2) || //dont use start
            (match && dfs(i + 1, j)) // Use start'
            return memo[key];
        } if (match) {
            memo[key] = dfs(i + 1, j + 1 )
            return memo[key];
        }

        memo[key] = false;
        return false;
    }   
   return dfs(0, 0);
}

let s = "aa", p = "a*"
console.log(isMatch(s, p))