function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    if(servedOrders.length === 0)
        return true;
    // Check if we're serving orders first-come, first-served
    if(takeOutOrders.length && takeOutOrders[0] === servedOrders[0])
        return isFirstComeFirstServed(takeOutOrders.splice(1), dineInOrders, servedOrders.splice(1)) 
    else if(dineInOrders.length && dineInOrders[0] === servedOrders[0])
        return isFirstComeFirstServed(takeOutOrders, dineInOrders.splice(1), servedOrders.splice(1)) 
    else
    return false;
  }
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
console.log(actual);
  
  
  
  