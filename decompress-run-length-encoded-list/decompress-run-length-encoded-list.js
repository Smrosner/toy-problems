/**
 * @param {number[]} nums
 * @return {number[]}
 
 I: array of numbers
 O: array of numbers
 C: 2 <= nums.length <= 100, nums.length % 2 == 0, 1 <= nums[i] <= 100
 E: 
 
 [1,2] , freq = 1, val = 2
 freq = nums[2*i] | nums[2*0] = nums[0]
 val = nums[2*i+1] | nums[2*0+1] = nums[1]
 
 [1,2], 1, 2 = [2]
 [2,4,4,4], 3,4 = [4,4,4]
 */
var decompressRLElist = function(nums) {
    let res = []
    // look through nums array
    for (let i = 0; i < nums.length; i+=2) {
        // for each pair of elements take the first number of the pair set to feq and second to val
        let freq = nums[i] 
        const val = nums[i+1]
    // while there is freq add val to result array
        while(freq) {
            res.push(val)
        // then freq - 1 
            freq--
        }
    }
    // return result
    return res
};