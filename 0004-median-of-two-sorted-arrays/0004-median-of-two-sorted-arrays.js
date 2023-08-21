/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergeAndSort = (arr1, arr2) => arr1.concat(arr2).sort((a, b) => a - b);
    const sortedList = mergeAndSort(nums1, nums2);
    
    const len = sortedList.length;
    const midIndex = Math.floor(len/2);

    let middle;

    if (len % 2 !==0 ) {
        middle = sortedList[midIndex];
    } else {
        middle = (sortedList[midIndex - 1] + sortedList[midIndex]) / 2;
    }
    return middle
};