/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    const letterCount = {};
    let answer = 0;
    [...word].forEach(letter => {
        letterCount[letter] = letterCount[letter] !== undefined ? letterCount[letter] + 1 : 1
    })
    const sortedLetterCount = Object.entries(letterCount).sort((a, b) => b[1] - a[1])
    sortedLetterCount.forEach(([key, value], index) => {
        const pos = Math.floor(index / 8) + 1
        answer += (value * pos)
    })
    return answer
};