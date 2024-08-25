/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    const dp = new Array(n + 1)
    let index2 = 1, index3 = 1, index5 = 1
    dp[1] = 1
    for (let i = 2; i < dp.length; i++) {
        const next2 = dp[index2] * 2
        const next3 = dp[index3] * 3
        const next5 = dp[index5] * 5
        const nextUglyNum = Math.min(next2, next3, next5)
        if (nextUglyNum === next2) index2++
        if (nextUglyNum === next3) index3++
        if (nextUglyNum === next5) index5++
        dp[i] = nextUglyNum
    }

    return dp[n]
};
