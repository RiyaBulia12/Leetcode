/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
   let total = 0;
   let leftRes = 0;

   for (let i = 0; i < nums.length; i++) total += nums[i];

   for (let i = 0; i < nums.length; i++) {
      total -= nums[i];
      if (leftRes === total) return i;
      leftRes += nums[i];
   }

   return -1
};
