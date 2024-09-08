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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const numsMap = {}
    nums.forEach((num) => numsMap[num] = true)

    const newHead: ListNode | null = new ListNode(null, head)
    let prevListNode: ListNode | null = newHead
    while (prevListNode.next !== null) {

        if (numsMap[prevListNode.next.val]) {
            prevListNode.next = prevListNode.next.next
        }
        else {
            prevListNode = prevListNode.next
        }
    }
    return newHead.next
};