/**
 * @param {number[]} nums
 * @return {number}
 Input: nums = [12,345,2,6,7896]
 Output: 2
 */
var findNumbers = function(nums) {
    const strNums = nums.toString().split(',')
    let count = 0
    for (const el of strNums) {
        if (el.length % 2 === 0) {
            count++
        }
    }
    return count
};