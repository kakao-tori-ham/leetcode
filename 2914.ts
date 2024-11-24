function minChanges(s: string): number {
    let answer = 0

    for (let i = 1; i < s.length; i += 2) {
        if (s[i - 1] !== s[i]) {
            answer++
        }
    }

    return answer
};