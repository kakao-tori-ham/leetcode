function maximumSwap(num: number): number {
    const numStr = num.toString()
    const numArray = numStr.split("");
    let max = -1
    let maxIndex = 0
    let prev = parseInt(numArray[0])
    let maxCheckFlag = false

    for (let i = 1; i < numArray.length; i++) {
        const cur = parseInt(numArray[i])

        if (prev < cur) maxCheckFlag = true
        if (maxCheckFlag && max <= cur) {
            max = cur
            maxIndex = i
        }
        prev = cur
    }

    for (let i = 0; i < numArray.length; i++) {
        const cur = parseInt(numArray[i])
        if (maxIndex <= i) break
        if (max > cur) {
            numArray[maxIndex] = numArray[i]
            numArray[i] = max.toString()
            break
        }
    }

    return parseInt(numArray.join(""))
};