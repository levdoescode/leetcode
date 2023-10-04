// From https://leetcode.com/problems/add-two-numbers/solutions/3077723/only-4-lines-of-code-high-level-solution-explained-all-coding-steps/?submissionId=1066398674

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function(l1, l2, carry) {
    if(!l1 && !l2 && !carry) return null;

    var total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
    carry = parseInt(total / 10);
    return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
};

l1 = new ListNode(2, new ListNode(4, new ListNode(3, undefined)));
l2 = new ListNode(5, new ListNode(6, new ListNode(4, undefined)));

console.log(addTwoNumbers(l1, l2));
