type Distance = {
    value: number;
    group: number;
}
function maxDistance(arrays: number[][]): number {
    const sortedMaxArr: Distance[] = arrays.map((array, index) => {
        return {
            value: array[array.length - 1],
            group: index
        }
    }).sort(function (a, b) {
        return b.value - a.value;
    })
    const sortedMinArr: Distance[] = arrays.map((array, index) => {
        return {
            value: array[0],
            group: index
        }
    }).sort(function (a, b) {
        return a.value - b.value;
    })

    const isSameGroup = sortedMaxArr[0].group === sortedMinArr[0].group
    const answer: number = isSameGroup ? Math.max(sortedMaxArr[0].value - sortedMinArr[1].value, sortedMaxArr[1].value - sortedMinArr[0].value) : sortedMaxArr[0].value - sortedMinArr[0].value

    return answer
};