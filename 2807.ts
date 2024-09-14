/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function gcd(n1, n2) {
    const rest = n1 % n2
    if (rest === 0) return n2
    return gcd(n2, rest)
}
function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    let curNode: ListNode | null = head
    while (curNode !== null) {
        const nextNode: ListNode | null = curNode.next
        const hasNextNode = Boolean(nextNode)
        if (hasNextNode) {
            const nextNodeVal: number = nextNode.val
            const newNode = new ListNode(gcd(curNode.val, nextNodeVal), nextNode)
            curNode.next = newNode
        }
        curNode = nextNode
    }
    return head
};