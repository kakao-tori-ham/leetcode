function minAddToMakeValid(s: string): number {
    const sArr = s.split("")
    let openCount = 0
    let endCount = 0

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === '(') {
            openCount++
        }
        // 앞에 open이 있을 때만 닫기 가능
        if (sArr[i] === ')') {
            if (openCount > 0) {
                openCount--
            } else {
                endCount++
            }
        }
    }

    return openCount + endCount
};