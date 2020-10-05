export class Board<T> {
    readonly width: number
    readonly height: number
    readonly board: Array<T>

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.board = Array(width * height).fill(null)
    }

    getBoardValueByCoordinates(xWidth: number, yHeight: number): T {
        const index = this.getIndexFor(xWidth, yHeight)
        return this.getBoardValueByIndex(index)
    }

    getBoardValueByIndex(index: number): T {
        if (index < 0 || index >= this.board.length) {
            return null
        }
        return this.board[index]
    }

    pushItemToBoardByCoordinates(xWidth: number, yHeight: number, item: T) {
        const index = this.getIndexFor(xWidth, yHeight)
        this.pushItemToBoardByIndex(index, item)
    }

    pushItemToBoardByIndex(index: number, item: T) {
        this.board[index] = item
    }

    populateBoard(populate: (xWidth: number, yHeight: number) => T) {
        this.board.map((value: T, index: number) => {
            const [x, y] = this.getDimensionsFor(index)
            return populate(x, y)
        })
    }

    getDimensionsFor(index: number): [number, number] {
        const xWidth: number = index % this.width
        const yHeight: number = Math.trunc(index / this.width)
        return [xWidth, yHeight]
    }

    getIndexFor(xWidth: number, yHeight: number): number {
        return xWidth + (yHeight * this.width)
    }

}