/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let len1 = num1.length, len2 = num2.length;
  let pos = new Array(len1 + len2).fill(0); 
  
  for(let i=len1-1;i>=0;i--){
    for(let j=len2-1;j>=0;j--){
    	let mul = parseInt(num1[i]) * parseInt(num2[j]); 
      let p1 = i+j, p2 = i+j+1;
      let sum = mul + pos[p2] + pos[p1] * 10;
      
      pos[p1] = Math.floor(sum / 10);
      pos[p2] = sum % 10;
    }
  }
  
  while(pos[0] === 0 && pos.length>1)
    pos.shift();
  return pos.join("");
};
var multiply_ = function(num1, num2) {
    let result = (BigInt(num1)*BigInt(num2)).toString();
    return result;
};

// Input: num1 = "2", num2 = "3"
// Output: "6"