/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let temp = 0;

  for (let num of nums) {
    temp += num;
    maxSum = Math.max(maxSum, temp);
    if (temp < 0) {
      temp = 0;
    }
  }
  return maxSum;
};
// @lc code=end

