function isValid(code) {
  const obj = {
    "{": "}",
    "[": "]",
    "(": ")"
  }
  
  const stack = [];
  const set = new Set();
  for(let s of code) {
    if(obj.hasOwnProperty(s)) {
      stack.push(obj[s]);
    } else {
      const b = stack.pop();
      if(b != s)
        return false; 
    }
}
//console.log(stack);
  return stack.length == 0;
}
console.log(isValid('([][]}'))


