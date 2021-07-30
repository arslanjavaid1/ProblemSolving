// 1239. Maximum Length of a Concatenated String with Unique Characters
/**
 * @param {string[]} arr
 * @return {number}
 */
 let max;
 var maxLength = function(arr) {
     if(arr.length === 0) return "";
     max = -Infinity;
     dfs (arr, "", 0);
     return max;
 };
 
 const dfs = (arr, st, idx) => {
     if(!isUnique(st)) {
         return
     }
     max = Math.max(max, st.length);
     for(let i  = idx; i < arr.length; i++) {
         dfs(arr, st+arr[i], i + 1);
     }
 }
 
 const isUnique = (st) => {
     let arr = Array(st.length).fill(false);
     for(c of st) {
         if(arr[c]) return false;
         else arr[c] = true;
     }
     return true;
 }
let arr = ["un","iq","ue"];
arr = ["abcdefghijklmnopqrstuvwxyz"]
arr = ["cha","r","act","ers"]
console.log(maxLength(arr))