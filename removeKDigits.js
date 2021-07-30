/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * 402. Remove K Digits
 */
 var removeKdigits = function(num, k) {
    const length = num.length;
   if (length === 0) return '0';
   if(length === k) return '0';
   const stack = [];
   let i = 0;
   while( i < length) {
       while(k > 0 && stack[stack.length - 1]> num[i] ){
           stack.pop();
           k--;
       }
       stack.push(num[i]);
       i++
   }
   while(k > 0) {
       stack.pop();
       k--;
   }
   let s = stack.join('');
   while(s.length > 1  && s.charAt(0) === '0'){
      s = s.replace(s.substring(0, 1), "");
       }
   return s;
};

let num = "10200", k = 1
console.log(removeKdigits(num, k));