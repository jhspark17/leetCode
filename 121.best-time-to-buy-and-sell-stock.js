/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;
  const dp = new Array(prices.length).fill(0);
  let min = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      dp[i] = dp[i - 1];
    }
    else dp[i] = Math.max(dp[i - 1], prices[i] - min);
  }
  return dp[dp.length - 1];
};
// @lc code=end

