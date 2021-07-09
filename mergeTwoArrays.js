function mergeArrays(myArray, alicesArray) {

    const mergedArray = [];
  
    let currentIndexAlices = 0;
    let currentIndexMine = 0;
    let currentIndexMerged = 0;
   
    while (currentIndexMerged < (myArray.length + alicesArray.length)) {
      const firstUnmergedAlices = alicesArray[currentIndexAlices];
      const firstUnmergedMine = myArray[currentIndexMine];
  
      // Case: next comes from my array
      if (firstUnmergedMine < firstUnmergedAlices) {
        mergedArray[currentIndexMerged] = firstUnmergedMine;
        currentIndexMine++;
  
        // Case: next comes from Alice's array
      } else {
        mergedArray[currentIndexMerged] = firstUnmergedAlices;
        currentIndexAlices++;
      }
  
      currentIndexMerged++;
    }
  
    return mergedArray;
  }
let actual = mergeArrays([2, 4, 6], [1, 3, 7]);
console.log(actual);