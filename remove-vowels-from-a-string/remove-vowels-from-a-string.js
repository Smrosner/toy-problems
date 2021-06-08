/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let res = ''
    let vowels = 'aeiou'
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            continue
        } else {
            res += s[i]
        }
    }
    return res
};