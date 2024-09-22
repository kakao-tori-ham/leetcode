function largestNumber(nums: number[]): string {
    const stringNums = nums.map(num => num.toString())
    const sortedNums = stringNums.sort(compare)
    return sortedNums.reduce((arr, cur) => arr + cur, "").replace(/^0+/, '0')
};

function compare(a: string, b: string) {
    return (b + a).localeCompare(a + b)
}