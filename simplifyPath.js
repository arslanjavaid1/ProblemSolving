var simplifyPath = function(path) {
    let arr = path.split("/"), stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "" || arr[i] === ".") continue;
        if (arr[i] === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(arr[i]);    
        }
    }
    if (stack.length === 0) return "/";
    let res = new Array(stack.length+1), idx = res.length - 1;
    while (stack.length > 0) {
        res[idx--] = stack.pop();
    }
    res[idx] = "";
    return res.join("/");
    // T.C: O(N)
    // S.C: O(N)
};