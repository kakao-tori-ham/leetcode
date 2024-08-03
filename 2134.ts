function minSwaps(nums: number[]): number {
    const arr = new Array(nums.length)
    let countOne = 0
    let answer = nums.length

    nums.forEach((num, index) => {
        countOne += num
        arr[index] = countOne
    })

    for (let i = 0; i < nums.length; i++) {
        const isOverflow = i + countOne >= nums.length
        const overflowValue = arr[nums.length - 1] + arr[(i + countOne) % nums.length]
        const sequenceCount = (isOverflow ? overflowValue : arr[i + countOne]) - arr[i]
        answer = Math.min(countOne - sequenceCount, answer)
    }

    return answer
};