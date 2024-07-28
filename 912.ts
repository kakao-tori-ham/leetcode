type DividedNums = {
    leftNums: number[];
    rightNums: number[];
}
function sortArray(nums: number[]): number[] {
    return mergeSort(nums)
};

function mergeSort(nums: number[]): number[] {
    if (nums.length === 1) return nums
    const { leftNums, rightNums } = divide(nums)
    return merge(mergeSort(leftNums), mergeSort(rightNums))

}

function divide(nums: number[]): DividedNums {
    const center: number = Math.ceil(nums.length / 2)

    const leftNums: number[] = nums.slice(0, center)
    const rightNums: number[] = nums.slice(center)

    return {
        leftNums,
        rightNums
    }
}

function merge(leftNums: number[], rightNums: number[]): number[] {
    let mergedNums: number[] = []
    let leftNumsIndex: number = 0
    let rightNumsIndex: number = 0

    while (leftNumsIndex < leftNums.length && rightNumsIndex < rightNums.length) {
        if (leftNums[leftNumsIndex] < rightNums[rightNumsIndex]) {
            mergedNums.push(leftNums[leftNumsIndex])
            leftNumsIndex++
        }
        else {
            mergedNums.push(rightNums[rightNumsIndex])
            rightNumsIndex++
        }
    }
    if (leftNumsIndex < leftNums.length) {
        mergedNums = mergedNums.concat(leftNums.slice(leftNumsIndex))
    }

    if (rightNumsIndex < rightNums.length) {
        mergedNums = mergedNums.concat(rightNums.slice(rightNumsIndex))
    }

    return mergedNums
}