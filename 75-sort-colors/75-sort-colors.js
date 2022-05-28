/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 TC
 Input: nums = [2,0,2,1,1,0]
 Output: [0,0,1,1,2,2]
 */
var sortColors = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            let temp = nums[j]
            if (nums[j] > nums[j + 1]) {
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums
};