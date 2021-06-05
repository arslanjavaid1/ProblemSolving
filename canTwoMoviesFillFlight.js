function canTwoMoviesFillFlight(movieLengths, flightLength) {
    let map = new Set();
    // Determine if two movie runtimes add up to the flight length

    for(let i = 0; i < movieLengths.length; i++){
        let sum =  flightLength - movieLengths[i];
        if(map.has(sum))
            return true
        map.add(movieLengths[i]);
    }

    return false;
  }
  
  let actual;
  actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
  console.log(actual)  
  
  
  
  
  
  