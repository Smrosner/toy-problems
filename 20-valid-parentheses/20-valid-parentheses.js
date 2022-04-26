/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) { 
    if (s.length % 2 === 1) {
        return false
    }
    
    let bank = []
    const prens = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    } 
        
    for (let i = 0; i < s.length; i++) {
        if (!prens[s[i]]) {
            bank.push(s[i])
        } else {
            if (prens[s[i]] === bank[bank.length-1]) {
                bank.pop()    
            } else {
                return false
            }
            
        }
    }
    return !bank.length
}