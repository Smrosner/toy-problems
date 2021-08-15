/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        'I': 1, 
        'V': 5, 
        'X': 10, 
        'L': 50, 
        'C': 100, 
        'D': 500, 
        'M': 1000
    }

    if (s.length === 1) {
        return roman[s]
    }
       
    let count = 0
    
    for (let i = 0; i < s.length; i++) {
        let left = s[i]
        let right = s[i + 1]
        if (roman[left] < roman[right]) {
            count -= roman[left]
        } else {
            count += roman[left]
        }
    }
    return count
};