/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let bank = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (bank[nums[i]] === undefined) {
            bank[nums[i]] = 1
        } else {
            bank[nums[i]]++
        }
    }
    
    let count = 0
    let res = 0
    
    for (key in bank) {
        if (bank[key] > count) {
            count = bank[key]
            res = key
        }
    }
    
    return res
};