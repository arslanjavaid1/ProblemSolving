/**
 * @param {string} s
 * @return {number}
 * 
 * Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
 

Constraints:

1 <= s.length <= 3 * 105
s consists of digits, '+', '-', '(', ')', and ' '.
s represents a valid expression.
'+' is not used as a unary operation.
'-' could be used as a unary operation but it has to be followed by parentheses.
Every number and running calculation will fit in a signed 32-bit integer.


 var calculate = function(s) {
    
    let index = 0;
    return dfs(s);
    
    function dfs(x){
        let n = 0;
        let sign = '+';
        let sum = 0;

        while(index<=x.length-1){
            const c = x[index++];
            if(isDigit(c)){
                n = (n*10) + (c-'0');
            }else if(c==='('){
                n = dfs(x);
            }

            if(c==='+'||c==='-'||c===')'||index===x.length)
                if(sign==='+'){
                    sum+=n;
                }else{
                    sum-=n;
                }
                n=0;
                sign=c;
            }

            if(c===')'){
                return sum;
            }
        }

        return sum;


        function isDigit(c){
            return c>='0'&&c<='9';
        }
    }
    
};
 */
var calculate = function(s) {
    let i = 0;
    const rec = () => {
        let [sum, lo, num, tsum] = [0, '+', 0, 0];
        const set = new Set(['+', '-', '*', '/']);
        while(i < s.length) {
            if(s[i] === '(') {
                i++;
                num = rec();
            } else {
                if(s[i] >= '0' && s[i] <= '9') {
                    num = num * 10 + parseInt(s[i]);
                }
            }
            if(set.has(s[i]) || i >= s.length-1 || s[i] === ')') {
                switch(lo) {
                    case '+':
                        sum += tsum;
                        tsum = num;
                        break;
                    case '-':
                        sum += tsum;
                        tsum = -num;
                        break;
                    case '*':
                        tsum *= num;
                        break;
                    case '/':
                        tsum = Math.trunc(tsum/num);
                        break;    
                }
                num = 0;
                lo = s[i];
            }
            if(s[i] === ')') {
                sum += tsum;
                i++;
                return sum;
            }
            i++;
        }
        sum += tsum;
        return sum;
    };
    
    return rec();
};

console.log(calculate( "1 + 1"))