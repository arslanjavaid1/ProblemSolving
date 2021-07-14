const combinations = (arr) => {
    if(arr.length === 0) return [[]];
    let first = arr[0];
    let rest = arr.slice(1);
    let combsWithFirst = [];
    let combsWithoutFirst = combinations(rest);
    combsWithoutFirst.forEach((element) => {
        let combWithFirst = [...element, first];
        combsWithFirst.push(combWithFirst);
    });

    return [...combsWithoutFirst, ...combsWithFirst];
}

console.log(combinations(['a', 'b', 'c']))