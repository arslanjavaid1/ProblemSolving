function highestProductOf3(arrayOfInts) {
    if(arrayOfInts.length < 3)
         throw new Error ("error");
    let h3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
    let h2 = arrayOfInts[0] * arrayOfInts[1];
    let l2 = arrayOfInts[0] * arrayOfInts[1];
    let h = Math.max(arrayOfInts[0], arrayOfInts[1]);
    let l = Math.min(arrayOfInts[0], arrayOfInts[1]);
    for(i = 2; i < arrayOfInts.length; i++){
        current = arrayOfInts[i];
        hp = Math.max(h3, h2 * current, l2 * current);
        h2 = Math.max (h2, h* current, l * current);
        l2 = Math.min (l2, l* current, h * current);
        h = Math.max (h, current);
        l = Math.min (l, current);
    }
    return h3;
    // arrayOfInts.sort((a,b) => a - b);
    // let p1 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[arrayOfInts.length - 1];
    // let p2 = arrayOfInts[arrayOfInts.length - 3] * arrayOfInts[arrayOfInts.length - 2] * arrayOfInts[arrayOfInts.length - 1];
    // return Math.max(p1, p2);
}
  actual = highestProductOf3([-10, 1, 3, 2, -10]);

  console.log(highestProductOf3([1, 4, 3, 2]));
