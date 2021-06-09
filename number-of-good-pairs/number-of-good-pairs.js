/**
 * @param {number[]} nums
 * @return {number}
 
 I: array of nums
 O: number of good pairs
 C: nums is at least one elm, num is between 1 and 100
 E: if length is 1, return 0
 
 */
var numIdenticalPairs = function(nums) {
    if (nums.length === 1) {
        return 0
    }
    
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
               res += 1 
            }
        }
    }
    return res
};