function minChanges(s: string): number {
    let answer = 0
    let prevCount = 1
    const strArr = s.split('')

    for (let i = 1; i < strArr.length; i++) {
        if (strArr[i - 1] !== strArr[i] && prevCount % 2 == 1) {
            strArr.splice(i, 1, s[i-1])
            prevCount = 1
            i++
            answer++
        }
        else prevCount++
    }

    return answer

};