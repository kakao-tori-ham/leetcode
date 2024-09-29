function findMinDifference(timePoints: string[]): number {
    let answer = 1500
    const sortedTimePoints = timePoints.sort()
    sortedTimePoints.push(sortedTimePoints[0])

    for (let i = 0; i < sortedTimePoints.length - 1; i++) {
        const diff = calcDifference(sortedTimePoints[i], sortedTimePoints[i + 1])
        answer = Math.min(diff, answer)
    }

    return answer
};

function calcDifference(time1: string, time2: string): number {
    const [HH1, MM1] = time1.split(':')
    const [HH2, MM2] = time2.split(':')

    const hourDiff = (HH2 < HH1 ? Number(HH2) + 24 : Number(HH2)) - Number(HH1)
    const minDiff = Number(MM2) - Number(MM1)

    const diff = hourDiff * 60 + minDiff
    return Math.abs(diff)
}