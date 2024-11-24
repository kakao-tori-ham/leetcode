function compressedString(word: string): string {
    let comp = ''
    let count = 1
    let prev = word[0]
    for (let i = 1; i < word.length; i++) {
        if (prev !== word[i] || count >= 9) {
            comp += `${count}${prev}`
            count = 1
            prev = word[i]
        }
        else if (prev === word[i]) {
            count++
        }
    }
    comp += `${count}${prev}`

    return comp
};