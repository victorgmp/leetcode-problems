const ListNode = require('./Node');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let result = new ListNode(-1);
  const currentNode = result;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      result.next = l1;
      l1 = l1.next;
    } else {
      result.next = l2;
      l2 = l2.next;
    }
    result = result.next;
  }

  if (l1 !== null) {
    result.next = l1;
  } else {
    result.next = l2;
  }

  return currentNode.next;
};

const l1 = [1, 2, 4];
const l2 = [1, 3, 4];
console.log(mergeTwoLists(l1, l2));
