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
const addTwoNumbers = (l1, l2) => {
  const result = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let currentNode = result;
  let carry = 0;

  while (p1 !== null || p2 !== null) {
    const x = (p1 !== null) ? p1.val : 0;
    const y = (p2 !== null) ? p2.val : 0;
    const sum = x + y + carry;

    carry = Math.floor(sum / 10);
    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;

    if (p1 != null) p1 = p1.next;
    if (p2 != null) p2 = p2.next;
  }

  if (carry > 0) {
    currentNode.next = new ListNode(carry);
  }

  return result.next;
};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

console.log(addTwoNumbers(l1, l2));
