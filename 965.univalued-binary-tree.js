/*
 * @lc app=leetcode id=965 lang=javascript
 *
 * [965] Univalued Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (!root) return false;
  const val = root.val;
  const stack = [root.left, root.right];

  while(stack.length) {
    let node = stack.pop();
    if (!node) continue;
    if (node.val !== val) return false;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return true;
};

