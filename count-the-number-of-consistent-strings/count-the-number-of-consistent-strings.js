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
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        let isAllowed;
        for (let j = 0; j < word.length; j++) {
            let letter = word[j]
            if (allowed.includes(letter)) {
                isAllowed = true
            } else {
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