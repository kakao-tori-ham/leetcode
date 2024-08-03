function minimumDeletions(s: string): number {
    const countB = new Array(s.length + 1);
    const countA = new Array(s.length + 1);
    let minCountToDelete = s.length + 1


    countB[0] = 0
    countA[s.length] = 0
    for (let i = 1; i <= s.length; i++) {
        countB[i] = countB[i - 1] + (s[i - 1] === 'b' ? 1 : 0)
        countA[s.length - i] = countA[s.length - i + 1] + (s[s.length - i] === 'a' ? 1 : 0)
    }
    for (let i = 0; i <= s.length; i++) {
        minCountToDelete = Math.min(minCountToDelete, countB[i] + countA[i])
    }

    return minCountToDelete

};