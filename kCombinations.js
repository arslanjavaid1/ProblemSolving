const combine = (n, k, cur = [], res = [], idx = 1) => {
    if (cur.length === k) { return res.push(cur.slice(0)); }
    for (let i = idx; i <= n; i++) {
        cur.push(i);
        combine(n, k, cur, res, i + 1);        
        cur.pop();
    }
    return res;
};
console.log(combine(4, 2))