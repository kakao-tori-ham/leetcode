function xorQueries(arr: number[], queries: number[][]): number[] {
    const sum = new Array(arr.length + 1)
    sum.fill(0)

    for (let i = 1; i <= arr.length; i++) {
        sum[i] = sum[i - 1] ^ arr[i - 1]
    }

    return queries.map(([start, end]) => sum[start] ^ sum[end + 1])
}
