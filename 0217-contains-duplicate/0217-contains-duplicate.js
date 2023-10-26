/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let countMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (countMap[num]) {
            return true;
        } else {
            countMap[num] = 1;
        }
    }

    return false;
};