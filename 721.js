/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const p = new Array(1002)

function find(num) {
    if (num === p[num])
        return num
    return p[num] = find(p[num])
}

var accountsMerge = function (accounts) {
    const emailMap = {}
    const emailArrMap = {}
    const answer = []
    for (let i = 0; i < accounts.length; i++) {
        p[i] = i
        for (let j = 1; j < accounts[i].length; j++) {
            const emailOwnerId = emailMap[accounts[i][j]]
            if (emailOwnerId === undefined) {
                emailMap[accounts[i][j]] = i
            } else {
                const p1 = find(emailOwnerId)
                const p2 = find(i)

                p[p2] = p1
            }
        }
    }

    Object.entries(emailMap).map(([key, value]) => {
        const parent = find(value)
        if (emailArrMap[parent]) emailArrMap[parent].push(key)
        else emailArrMap[parent] = [key]
    })
    Object.entries(emailArrMap).map(([key, value]) => {
        value.sort()
        answer.push([accounts[key][0], ...value])
    })

    return answer
};