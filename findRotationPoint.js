function findRotationPoint(words) {
    if(words.length == 0)
      return 0;
    const startword = words[0]
    let start = 0;
    let end = words.length - 1;
    while (start < end) {
      let mid = Math.floor(start + ((end - start) / 2));
      if(words[mid] >= startword)
            start  = mid; 
        else
            end = mid;

        if(start + 1 === end)
            break;
  }
  return end;
}
  
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
  console.log(actual);