function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
  }
  
  function shuffle(array) {
    if (array.length <= 1) {
        return;
    }    
    for (let index = 0; index < array.length-1; index++) {
        const random = getRandom(index, array.length - 1);
        if(random != index) {
            const temp = array[random];
            array[random] = array[index];
            array[index ] = temp;
        }
    }
    return array;
  
  }
  
  
  const sample = [1, 2, 3, 4, 5];
  console.log('Initial array: ', sample);
  shuffle(sample);
  console.log('Shuffled array: ', sample);