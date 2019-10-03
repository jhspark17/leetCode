/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let newVal = l1.val + l2.val;
  let carry = 0;
  let top = new ListNode(newVal % 10 + carry);
  carry = Math.floor(newVal / 10);
  l1 = l1.next;
  l2 = l2.next;
  let root = top
  let node;
  while (l1 || l2 || carry > 0) {
    if (l1 || l2) {
      let val1 = l1 ? l1.val : 0;
      let val2 = l2 ? l2.val : 0;
      newVal = val1 + val2 + carry;
      node = new ListNode(newVal % 10);
      carry = Math.floor(newVal / 10);
      l1 = l1 ? l1.next : 0;
      l2 = l2 ? l2.next : 0;
      root.next = node;
      root = node;
    }  else {
      node = new ListNode(carry);
      root.next = node;
      carry = 0;
    }
  }
  return top;
};
// @lc code=end

// else if (l1) {
//   newVal = l1.val + 0 + carry;
//   node = new ListNode(newVal % 10);
//   carry = Math.floor(newVal / 10);
//   l1 = l1.next;
//   root.next = node;
//   root = node;
// } else if (l2) {
//   newVal = l2.val + 0 + carry;
//   console.log(newVal)
//   node = new ListNode((newVal % 10) );
//   carry = Math.floor(newVal / 10);
//   l2 = l2.next;
//   root.next = node;
//   root = node;
// }

