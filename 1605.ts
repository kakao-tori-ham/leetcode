function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const rowSize = rowSum.length;
    const colSize = colSum.length;

    const answer = Array.from(Array(rowSize), () => new Array(colSize));
    const curRowSum = [...rowSum];
    const curColSum = [...colSum];

    for (let i = 0; i < rowSize; i++) {
        for (let j = 0; j < colSize; j++) {
            const minValue = Math.min(curRowSum[i], curColSum[j]);
            answer[i][j] = minValue;
            curRowSum[i] = curRowSum[i] - minValue;
            curColSum[j] = curColSum[j] - minValue;
        }
    }

    return answer;

};