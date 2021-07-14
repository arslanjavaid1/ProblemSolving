function FindIntersection(strArr) { 
    let s1 = strArr[0].replace(' ', '').split(',');
    let s2 = strArr[1].replace(' ', '').split(',');
    let st = s1.filter(value => s2.includes(value));
    return st.join(',');
}
     
  // keep this function call here 
  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));