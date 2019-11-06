/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	k = k % nums.length;
	const last = nums[nums.length - 1];

	nums.reduce((t, value, index, arr) => {
		arr[index + k] = t;
		return arr[index + k];
	});
	nums[0] = last;
	console.log(nums);
	return nums;
};
console.log(rotate([1,2,3,4,5,6,7], 3));