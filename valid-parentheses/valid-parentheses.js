/**
 * @param {string} s
 * @return {boolean}
 
 I: string char of '(', ')', '{', '}', '[' and ']'
 O: bool
 C: s is at least 1 char, only '(', ')', '{', '}', '[' and ']'
 E: if length is 1, return false
 
 TC:
 "([)]" 
 
 look through each char
 if opener next char must be same closer or other opener
 we'll need to save the order 
 ) ]
 first (, then [ if close it needs to be closed as the most recent opener's closer
 
 TC:
  "{[]}"
 
 
 */


var isValid = function(s) {
    
    if (s.length % 2 === 1) {
        return false
    }
    
    let bank = [] // ['{','[']
    
    let prens = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    
    for (let i = 0; i < s.length; i++) {
        let pren = s[i]
        let lastInBank = bank[bank.length - 1]
        
        if (prens[pren]) {
            if (prens[pren] === lastInBank) {
                bank.pop()
            } else {
                return false
            }
        } else {
            bank.push(pren)
        }
    }
    return !bank.length
};

