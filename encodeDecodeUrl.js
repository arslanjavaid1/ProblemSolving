const encodedDB = new Map();
const urlDB = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let code = getCode();
    
    // duplicate encodings, rare but can happen
    if (encodedDB.has(code)) {
        code = getCode(); // get another random encoding
    }
    
    // store values in maps
    encodedDB.set(longUrl, code);
    urlDB.set(code, longUrl);
    
    return code;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return urlDB.get(shortUrl);
};

function getCode() {
    // actually get the tinyURL encoding
    const base62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    const code = [];
    let i = 0;

    // get random sequence of characters
    while (i < 6) {
        code.push(base62.charAt(Math.floor(Math.random()*61)));
        i++;
    }
    
    return 'http://tinyurl.com/' + code.join('');
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */