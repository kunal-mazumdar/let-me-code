/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length; // This is required since we want to reverse within the nums length range
    reverseArray(nums, 0, nums.length - 1)
    reverseArray(nums, 0, k -1)
    reverseArray(nums, k, nums.length - 1)
};
​
function reverseArray(nums, s, e) {
    while(s < e) {
        var t = nums[s];
        nums[s] = nums[e];
        nums[e] = t;
        s++;
        e--;
    }
}
