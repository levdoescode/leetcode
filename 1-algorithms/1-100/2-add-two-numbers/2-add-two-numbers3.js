// This works but not for edge cases
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let previous_node = new ListNode();
    let head_node = previous_node;
    
    while (l1 || l2 || carry) {
        let digit1 = 0;
        let digit2 = 0;
        if (l1) {
            digit1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            digit2 = l2.val;
            l2 = l2.next;
        }
        const sum = digit1 + digit2 + carry;
        const digit = sum % 10;
        console.log(digit);
        new_node = new ListNode(digit, undefined);
        previous_node.next = new_node;
        previous_node = new_node;
        carry = sum > 9 ? 1 : 0;
    }
    return head_node.next;
};

l1 = new ListNode(2, new ListNode(4, new ListNode(3, undefined)));
l2 = new ListNode(5, new ListNode(6, new ListNode(4, undefined)));

console.log(addTwoNumbers(l1, l2));
