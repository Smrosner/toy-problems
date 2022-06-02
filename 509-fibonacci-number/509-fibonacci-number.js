/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, arr) {
    arr = arr || []
    
    if (n < 2) {
      return n
    } else {
        if (!arr[n]) {
            arr[n] = fib(n-1) + fib(n-2)
        }
        return arr[n]
    }
};