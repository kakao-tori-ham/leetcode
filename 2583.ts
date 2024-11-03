/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    const queue: TreeNode[] = [root]
    const sumArr: number[] = []

    while (queue.length > 0) {
        const size = queue.length
        let sum = 0

        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            sum += node.val

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        sumArr.push(sum)
    }

    sumArr.sort((a, b) => b - a)

    return k <= sumArr.length ? sumArr[k - 1] : -1
}