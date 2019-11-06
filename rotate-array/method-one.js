/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = k % nums.length;
    return nums.splice(0, 0, ...nums.splice(-n, n));
};