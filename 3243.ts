type CustomNode = {
    nodeId: number
    depth: number
}
function shortestDistanceAfterQueries(
    n: number,
    queries: number[][]
): number[] {
    const answer: number[] = []
    const nodeMap = {}

    for (let i = 0; i < queries.length; i++) {
        let minAnswer = 500
        const visited = {}
        nodeMap[queries[i][0]] = nodeMap[queries[i][0]]
            ? [...nodeMap[queries[i][0]], queries[i][1]]
            : [queries[i][1]]
        const q: CustomNode[] = []
        q.push({
            nodeId: 0,
            depth: 0,
        })

        while (q.length) {
            const current = q.shift()
            if (current === undefined) break
            if (current.depth > n - 1) {
                minAnswer = n - 1
                break
            }
            if (current.nodeId === n - 1) {
                minAnswer = Math.min(minAnswer, current.depth)
                continue
            }

            if (!visited[current.nodeId + 1]) {
                visited[current.nodeId + 1] = true
                q.push({
                    nodeId: current.nodeId + 1,
                    depth: current.depth + 1,
                })
            }
            if (nodeMap[current.nodeId]) {
                for (let j = 0; j < nodeMap[current.nodeId].length; j++) {
                    if (!visited[nodeMap[current.nodeId][j]]) {
                        visited[nodeMap[current.nodeId][j]] = true
                        q.push({
                            nodeId: nodeMap[current.nodeId][j],
                            depth: current.depth + 1,
                        })
                    }
                }
            }
        }

        answer.push(minAnswer)
    }
    return answer
}
