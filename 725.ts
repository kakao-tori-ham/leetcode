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

function splitListToParts(
    head: ListNode | null,
    k: number
): Array<ListNode | null> {
    const answer = []
    let nodeCount = 0
    let curNode = head

    while (curNode) {
        nodeCount++
        curNode = curNode.next
    }

    const quot: number = Math.floor(nodeCount / k)
    let rest = nodeCount % k

    curNode = head
    while (k--) {
        let partCount = quot + (rest-- > 0 ? 1 : 0)
        let partCurNode = curNode
        const newHead = partCurNode || null
        while (--partCount > 0 && partCurNode) {
            partCurNode = partCurNode.next
        }
        curNode = partCurNode?.next
        if (partCurNode) partCurNode.next = null
        answer.push(newHead)
    }

    return answer
}
