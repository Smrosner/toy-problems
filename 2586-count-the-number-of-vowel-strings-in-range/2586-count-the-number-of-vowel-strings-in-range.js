/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowels = new Set(['a','e','i','o','u'])
    
    let count = 0;
    
    while (left <= right) {
        let word = words[left].toLowerCase();        
        const first = word[0];
        const last = word.at(-1);
        if (vowels.has(first) && vowels.has(last)) {
            count++
            }
        
        left++
    }
    
    return count;
    
};