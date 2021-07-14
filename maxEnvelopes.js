var maxEnvelopes = function(envelopes) {
    
    const lis = (nums) => {
        const temp = Array(nums.length);
        let size = 0;
        for(let x of nums) {
            let [l, h] = [0, size];
            while(l < h) {
                const mid = Math.trunc((l+h)/2);
                if(temp[mid] < x) {
                    l = mid+1;
                } else {
                    h = mid;
                }
            }
            temp[l] = x;
            if(size === l) {
                size++;
            }
        }
        return size;
    };
    envelopes.sort((a, b) => {
        if(a[0] === b[0]) {
            return b[1]-a[1];
        } else {
            return a[0]-b[0];
        }
    });
    
    const arr = envelopes.map((x) => x[1]);
    return lis(arr);
    
};
let envelopes = [[5, 4], [6, 4], [6, 7], [2, 3]];
envelopes = [[46, 89], [50, 53], [52, 68], [72, 45], [77, 81]]
console.log(maxEnvelopes(envelopes));