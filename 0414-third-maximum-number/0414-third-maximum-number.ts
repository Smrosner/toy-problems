function thirdMax(nums: number[]): number {

    let uniqueNums = [...new Set(nums)];
    uniqueNums.sort((a, b) => b - a);
    
    if (uniqueNums.length >= 3 ) {
        return uniqueNums[2]
    } else {
        return uniqueNums[0]
    }

};