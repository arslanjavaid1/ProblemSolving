const groupTraveler = (m, n, memo = {}) => {
    if(m == 0 || n == 0)
        return 0;
    if (m == 1 && n == 1)
        return 1;
    const memoKey = [m,n].join(',');
    if(memoKey in memo)
        return memo[memoKey];

    memo[memoKey] =  groupTraveler(m - 1, n, memo) + groupTraveler( m, n-1, memo);
    return memo[memoKey];
}

console.log(groupTraveler(1,1));
console.log(groupTraveler(2,3));
console.log(groupTraveler(3,2));    
console.log(groupTraveler(3,3)); 
console.log(groupTraveler(18,18));    