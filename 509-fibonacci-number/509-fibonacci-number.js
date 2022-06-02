/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, cache) {
    cache = cache || {}
    
    if (n < 2) {
      return n
    } else {
        if (!cache[n]) {
            cache[n] = fib(n-1) + fib(n-2)
        }
        return cache[n]
    }
};