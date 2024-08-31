/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
var countSubIslands = function (grid1, grid2) {
    const m = grid1.length
    const n = grid1[0].length
    const check = Array.from(Array(m), () => Array(n).fill(false))
    const q = []
    let answer = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] == 1 && !check[i][j]) {
                check[i][j] = true
                const isSubIsland = bfs(i, j)
                if (isSubIsland)
                    answer++

            }

        }
    }

    function bfs(startRow, startCol) {
        let isSubIsland = true
        q.push({ r: startRow, c: startCol })
        while (q.length !== 0) {
            const cur = q.shift()
            if (grid1[cur.r][cur.c] != 1) {
                isSubIsland = false
            }
            for (let i = 0; i < dir.length; i++) {
                const nextRow = cur.r + dir[i][0]
                const nextCol = cur.c + dir[i][1]
                if (isNextPosValid(nextRow, nextCol)) {
                    q.push({ r: nextRow, c: nextCol })
                    check[nextRow][nextCol] = true
                }
            }
        }
        return isSubIsland
    }

    function isNextPosValid(nextRow, nextCol) {
        return nextRow >= 0 && nextRow < m
            && nextCol >= 0 && nextCol < n
            && grid2[nextRow][nextCol] && !check[nextRow][nextCol]
    }
    return answer

};