/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
 var getSkyline = function(buildings) {
    let heights = [];
    for( let [x1,x2,h] of buildings) {
        heights.push([x1,h],[x2,-h]);
    }
    heights.sort(([x1,h1], [x2,h2]) => x1 - x2 || h2 - h1);
    const he = [];
    const addHeights = (he, h) => {
        let left = 0;
        let right = he.length - 1;
        while(left <= right) {
            let mid = Math.floor((right + left) / 2);
            if(he[mid] >= h) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        he.splice(left,0,h);
    }

    const removeHeights = (he, h) => {
        let left = 0;
        let right = he.length - 1;
        while(left <= right) {
            let mid = Math.floor((right + left) / 2);
            if(he[mid] >= h) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        he.splice(left,1);
    }

    const ans = [];
    let prevH = 0;
    for(let [x, h] of heights) {
        if( h > 0)
            addHeights(he, h);
        else 
        removeHeights(he, -h);

        let cur = he[he.length - 1] || 0;
        if(cur !== prevH) {
            ans.push([x,cur]);
            prevH = cur;
        }
    }
    return ans;
    
};

console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]));