function lexicalOrder(n: number): number[] {
    const answer = [1]
    for (let i = 1; i < n; i++) {
        const next = getNext(n, answer[i - 1])
        answer.push(next)
    }
    return answer
};

function getNext(n: number, prevNum: number) {
    if (prevNum >= n) {
        prevNum = Math.floor(prevNum / 10)
        while (prevNum % 10 === 9) {
            prevNum = Math.floor(prevNum / 10)
        }
        return prevNum + 1
    }
    else if (prevNum * 10 <= n) return prevNum * 10
    else {
        while (prevNum % 10 === 9) {
            prevNum = Math.floor(prevNum / 10)
        }
        return prevNum + 1
    }
}