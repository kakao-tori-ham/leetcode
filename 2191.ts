type JumbledNumber = {
    original: number
    mapped: number
}

function sortJumbled(mapping: number[], nums: number[]): number[] {
    const jumbledNumbers: JumbledNumber[] = []
    for (const num of nums) {
        const jumbledNumber: JumbledNumber = {
            original: num,
            mapped: makeMappedValue(num, mapping),
        }
        jumbledNumbers.push(jumbledNumber)
    }
    jumbledNumbers.sort((a, b) => {
        return a.mapped - b.mapped
    })
    return jumbledNumbers.map((jumbledNum) => jumbledNum.original)
}

function makeMappedValue(num, mapping): number {
    const numString: string = String(num)
    let mappedValue: string = ''
    for (let i = 0; i < numString.length; i++) {
        mappedValue += mapping[numString[i]]
    }
    return Number(mappedValue)
}
