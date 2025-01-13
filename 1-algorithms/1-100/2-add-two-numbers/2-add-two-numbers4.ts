class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0); // Dummy node to simplify list handling
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // Compute the carry
        current.next = new ListNode(sum % 10); // Create a new node for the current digit
        current = current.next;

        if (l1) l1 = l1.next; // Move to the next digit in l1
        if (l2) l2 = l2.next; // Move to the next digit in l2
    }

    return dummyHead.next; // Return the actual head of the result list
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2)); // 7 -> 0 -> 8
