function maxPoints(points: number[][]): number {
    const rowSize = points.length
    const colSize = points[0].length
    const dp = Array.from(Array(rowSize), () => Array(colSize).fill(null))

    let answer = 0

    points[0].forEach((point, index) => {
        dp[0][index] = point
        answer = Math.max(answer, dp[0][index])
    })

    for (let i = 1; i < rowSize; i++) {
        const leftDp = Array.from({ length: colSize }, () => 0)
        const rightDp = Array.from({ length: colSize }, () => 0)

        leftDp[0] = dp[i - 1][0]
        rightDp[colSize - 1] = dp[i - 1][colSize - 1]
        for (let j = 1; j < colSize; j++) {
            leftDp[j] = Math.max(leftDp[j - 1] - 1, dp[i - 1][j])
            rightDp[colSize - j - 1] = Math.max(rightDp[colSize - j] - 1, dp[i - 1][colSize - j - 1])
        }

        for (let j = 0; j < colSize; j++) {
            dp[i][j] = Math.max(leftDp[j], rightDp[j]) + points[i][j]
            answer = Math.max(answer, dp[i][j])
        }
    }
    return answer
};