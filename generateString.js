const generateString = (a, b) => {
    let rt = "";
    while (0 < A || 0 < B) {
        if (A < B) {
            if (0 < B--) {
                rt += "b";
            }
            if (0 < B--) {
                rt += "b";
            }
            if (0 < A--) {
                rt += 'a';
            }
        } else if (B < A) {
            if (0 < A--) {
                rt += "a";
            }
            if (0 < A--) {
                rt += "a";
            }
            if (0 < B--) {
                rt += 'b';
            }
        } else {
            if (0 < A--) {
                rt += 'a'
            }
            if (0 < B--) {
                rt += 'b'
            }
        }
 
    }
    return rt
}
    let A = 2, B = 6;
    console.log(generateString(A, B));
