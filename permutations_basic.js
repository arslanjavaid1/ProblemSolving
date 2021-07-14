const permutation = (elements) => {
    if (elements.length === 0) return [[]];
    const first = elements[0];
    const rest = elements.slice(1);
    const permsWithoutFirst = permutation(rest);
    const allPerms = [];
    permsWithoutFirst.forEach((el) => {
        for(let i = 0; i <= el.length;i++) {
            const permWithFirst =  [...el.slice(0,i), first, ...el.slice(i)];
            allPerms.push(permWithFirst.join(''));
        }
    });
    return allPerms;
}
console.log(permutation(['a', 'b', 'c']))