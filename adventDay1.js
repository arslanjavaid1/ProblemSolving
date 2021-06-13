
const adventDay1 = (expenses) => {
    if (expenses.length == 0)
        return 0;
    const set = new Set();
    for(num of expenses) {
        const diff = 2020 - num;
        if(set.has(diff))
        {
            return num * diff;
        }
        else {
            set.add(num);
        }
    }
}
console.log(adventDay1([1721, 979, 366, 299, 675, 1456]));