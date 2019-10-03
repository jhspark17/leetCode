/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const ans = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    ans[j] = right;
    right *= nums[j];
  }


  for (let i = 0; i < nums.length; i++) {
    ans[i] *= left;
    left *= nums[i]
  }
  return ans;
};
// @lc code=end

