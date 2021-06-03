/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 I: string of individual lowercase chars, array of string lowercase chars
 O: number 
 C: words has at least 1 element, allowed is at least 1 uniq char, word is at least 1 char
 E:
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0
    for (const word of words) {
        let isAllowed = true
        for (const letter of word) {
            if (!allowed.includes(letter)) {
                isAllowed = false
                break
            } 
        }
        if (isAllowed) {
            count++    
        }
    }
    return count
};