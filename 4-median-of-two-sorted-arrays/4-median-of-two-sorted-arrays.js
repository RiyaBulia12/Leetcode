/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1.push(...nums2);
    nums1.sort((a,b)=>a-b);

    let k = nums1.length; 
    if(k %2 === 1) {
        return nums1[(k-1)/2];
    } else {
        return (nums1[(k/2)]+nums1[(k-2)/2])/2;
    }
};