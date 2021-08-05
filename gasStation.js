let canCompleteCircuit = (gas, cost) => {
    if(gas.length === 0 ) return 0;
    let total = 0;
    let curr = 0;
    let station = 0;
    for(let i = 0; i < gas.length; i++) {
        curr += gas[i] - cost[i];
        total += gas[i] - cost[i];
        if(curr < 0) {
            curr = 0;
            station = i + 1;
        }
    }
    return total < 0 ? -1 : station;
}



let gas = [1,2,3,4,5], cost = [3,4,5,1,2];
console.log(canCompleteCircuit(gas, cost))