function getProductsOfAllIntsExceptAtIndex(intArray) {
    if (intArray.length < 2)
        throw new Error("error")
    let product = 1;
    let prodArray = [];
    for(let i = 0; i < intArray.length; i++) {
        prodArray[i] = product;
        product *= intArray[i];
    }
    product = 1;
    for(let j = intArray.length -1; j >=0; j--) {
        prodArray[j] *= product;
        product *= intArray[j]; 
    }
    return prodArray;
  }
  
  
  console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 3]));
  