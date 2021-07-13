/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //-2147483648 to 2147483647
    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;
    
    var xStr = x.toString()
    if (x < 10 && x > -10) {
        return x
    } else if (x >= 10) {
        var reversed = Number(xStr.split("").reverse().join(""))
        if (reversed >= max) {
            return 0
        } else {
            return reversed;    
        }
    } else if (x <= -10) {
        var neg = "-"
        var str = xStr.split("")
        for (let i = str.length -1; i >= 1; i--) {
            neg += str[i]
        }
        var reversedNeg = Number(neg)
        if (reversedNeg <= min) {
            return 0    
        } else {
            return reversedNeg
        }
        
    }
    
    
};