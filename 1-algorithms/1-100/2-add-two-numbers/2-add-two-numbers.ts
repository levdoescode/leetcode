class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1?: ListNode | null, l2?: ListNode | null, carry: number = 0): ListNode | null {
    if (!l1 && !l2 && !carry) return null;

    const total: number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = parseInt(total / 10 + "");
    // carry = Math.floor(total / 10)
    return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
}

const a1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const a2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(a1, a2)); // 7 -> 0 -> 8
