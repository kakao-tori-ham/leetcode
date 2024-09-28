class MyCircularDeque {
    private dequeArr: (number | null)[]
    private size: number
    private front: number = 0
    private last: number = -1

    constructor(k: number) {
        this.dequeArr = new Array(k).fill(null)
        this.size = k
    }

    insertFront(value: number): boolean {
        if (this.isFull()) return false

        this.front -= 1
        const frontIndex = this.getFrontIndex()
        this.dequeArr[frontIndex] = value

        const lastIndex = this.getLastIndex()
        if (this.dequeArr[lastIndex] === null) this.last = this.front

        return true
    }

    insertLast(value: number): boolean {
        if (this.isFull()) return false

        this.last += 1
        const lastIndex = this.getLastIndex()
        this.dequeArr[lastIndex] = value

        const frontIndex = this.getFrontIndex()
        if (this.dequeArr[frontIndex] === null) this.front = this.last

        return true
    }

    deleteFront(): boolean {
        if (this.isEmpty()) return false
        const frontIndex = this.getFrontIndex()
        this.dequeArr[frontIndex] = null
        this.front += 1

        return true
    }

    deleteLast(): boolean {
        if (this.isEmpty()) return false
        const lastIndex = this.getLastIndex()
        this.dequeArr[lastIndex] = null
        this.last -= 1

        return true
    }

    getFront(): number {
        const frontIndex = this.getFrontIndex()
        if (this.dequeArr[frontIndex] === null) return -1
        return this.dequeArr[frontIndex]
    }

    getRear(): number {
        const lastIndex = this.getLastIndex()
        if (this.dequeArr[lastIndex] === null) return -1
        return this.dequeArr[lastIndex]
    }

    isEmpty(): boolean {
        return this.front > this.last
    }

    isFull(): boolean {
        return this.last - this.front >= this.size - 1
    }

    getFrontIndex(): number {
        const frontRest = this.front % this.size
        const frontIndex = frontRest >= 0 ? frontRest : this.size + frontRest
        return frontIndex
    }

    getLastIndex(): number {
        const lastRest = this.last % this.size
        const lastIndex = lastRest >= 0 ? lastRest : this.size + lastRest
        return lastIndex
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
