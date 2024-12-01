function findChampion(n: number, edges: number[][]): number {
    const map = {}
    for (let i = 0; i < edges.length; i++) {
        map[edges[i][0]] = map[edges[i][0]]
            ? [...map[edges[i][0]], edges[i][1]]
            : [edges[i][1]]
    }

    for (let i = 0; i < n; i++) {
        const q = []
        const visited = {}
        let checkCount = 0

        q.push(i)
        visited[i] = true
        while (q.length) {
            const cur = q.shift()
            checkCount++
            if (!map[cur]) continue
            for (let j = 0; j < map[cur].length; j++) {
                if (!visited[map[cur][j]]) {
                    visited[map[cur][j]] = true
                    q.push(map[cur][j])
                }
            }
        }
        if (checkCount === n) {
            return i
        }
    }

    return -1
}
