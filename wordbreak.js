/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict);
    let result = Array();
    let backTrack = (result, s, set, path, start, end) => {
        if(end > s.length) {
            if(start === s.length){
                result.push(path.join(" "));
        }
            return;
        }
        if(set.has(s.substring(start, end))) {
            path.push(s.substring(start,end));
            backTrack(result,s,set,path,end,end+1);
            path.pop();
        }
        backTrack(result,s,set,path,start,end+1);
    }
    backTrack(result, s, set, [], 0, 1);
    return result;
};

console.log(wordBreak("catsanddog",["cat","cats","and","sand","dog"]));