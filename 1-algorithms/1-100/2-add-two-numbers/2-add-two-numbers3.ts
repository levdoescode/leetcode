class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function getNumberFromLinkedList(node: ListNode | null): number {
    let number = "";
    while (node) {
        number = node.val + number;
        node = node.next;
    }
    return parseInt(number) || 0;
}

function createLinkedList(number: number): ListNode {
    if (number === 0) return new ListNode(0);
    let head: ListNode | null = null;
    let tail: ListNode | null = null;
    while (number > 0) {
        const node = new ListNode(number % 10);
        if (!head) {
            head = node;
            tail = node;
        } else {
            tail!.next = node;
            tail = node;
        }
        number = Math.floor(number / 10);
    }
    return head!;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return createLinkedList(getNumberFromLinkedList(l1) + getNumberFromLinkedList(l2));
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2)); // 7 -> 0 -> 8

// Doesn't work with very large numbers due to the JS 'number' type
