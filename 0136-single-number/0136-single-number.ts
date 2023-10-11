function singleNumber(nums: number[]): number {
    let obj = {};
    
    for (const num of nums) {
        if (!obj[num]) {
            obj[num] = 1
        } else {
            obj[num]++
        }
    }
    
    for (const key in obj) {
        if (obj[key] === 1) {
            return +key
        }
    }
};