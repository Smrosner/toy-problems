/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) { return false }
    if (x < 10) { return true }

    const str = x.toString().split('')
    const strg = x.toString().split('').join()
    const rev = str.reverse().join()
    if (strg === rev) {
        return true
    }
    return false
};