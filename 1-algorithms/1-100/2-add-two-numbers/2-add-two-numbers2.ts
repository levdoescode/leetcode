class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null || l2 === null) {
        return l1 || l2;
    }

    let carry = 0;
    let head: ListNode | null = null;
    let tail: ListNode | null = null;
    while (l1 || l2 || carry) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        const node = new ListNode(sum % 10);
        if (!head) {
            head = node;
            tail = node;
        } else {
            tail!.next = node;
            tail = node;
        }
        carry = Math.floor(sum / 10);
        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }
    return head;
}

const a1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const a2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(a1, a2)); // 7 -> 0 -> 8
