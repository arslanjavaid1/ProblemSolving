/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let filteredText = text.replace(/[^balon]/g,'');
    let m = new Map();
    for (let char of filteredText) {
        if (m.has(char)) m.set(char,m.get(char)+1);
        else m.set(char,1);
    }
    if (m.size < 5) return 0;
    return Math.min(m.get('a'),m.get('b'),Math.floor(m.get('l')/2),
                        Math.floor(m.get('o')/2),m.get('n'));    
};