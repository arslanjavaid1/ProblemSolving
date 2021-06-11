function getPermutations(string) {
  if(!string)
    return new Set();
    set = new Set();
    let l = 0;
    let r = string.length - 1;
    return permute(string, l, r,set);
}

function permute(str, l, r,set) {
  if(l == r)
  {
    set.add(str);
  }
  else {
    for(let i = l; i <= r; i++) {
  
      str = swap(str, l, i);
     permute(str, l+1, r, set);
      str =  swap(str, l, i);
    }
  }
  return set;
}

function swap (str, l, r) {
  var str1 = [...str];
  var temp = str1[l];
  str1[l] = str1[r];
  str1[r] = temp;
  return str1.join("");
}

  let input = 'abc';
  let actual = getPermutations(input);  
  console.log(actual);
