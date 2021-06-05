/**
 * @param {number[]} prices
 * @return {number}
 
 I: array of numbers, unsorted
 O: number
 C: prices array has at least one element, element is greater than or equal to zero
 E: if price only has one element it will not have a profit for a different day in the future
 
 TC:
 prices = [7,1,5,3,6,4]
 
 set profit to zero
 look at each price
 if any of the following numbers are higher price
 reset profit to current profit if it is higher than previous profit
 
 */
var maxProfit = function(prices) {
    if (prices.length === 1) {
        return 0
    }
    let minPrice = Math.max(...prices)
    let profit = 0
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else if (prices[i] - minPrice > profit) {
            profit = prices[i] - minPrice
        }
    }
    return profit
};