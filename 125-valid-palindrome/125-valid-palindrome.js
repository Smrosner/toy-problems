/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length < 2) {
      return true
    }
    
    const str = s.replace(/[\W_]+/g, "").toLowerCase()
    
    const reversed = str.split("").reverse().join("")
    
    return str === reversed
};