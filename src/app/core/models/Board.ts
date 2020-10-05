export class Board<T> {
    readonly width: number
    readonly height: number
    readonly board: Array<T>

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.board = Array(width * height).fill(null)
    }

    getBoardValue(index: number): T {
        if (index < 0 || index >= this.board.length) {
            return null
        }
        return this.board[index]
    }

    pushItemToBoard(index: number, item: T) {
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

    getIndexToRight(index: number): number {
        return this.getAdjacentIndex(index, 1, (adjacent) => adjacent % this.width === 0)
    }

    getIndexToLeft(index: number): number {
        return this.getAdjacentIndex(index, -1, (adjacent) => adjacent % this.width === this.width - 1)
    }

    getIndexAbove(index: number): number {
        return this.getAdjacentIndex(index, -this.width)
    }

    getIndexBelow(index: number): number {
        return this.getAdjacentIndex(index, this.width)
    }

    private getAdjacentIndex(index: number, adjacencyChange: number, isBoardEdge: (adjacentIndex: number) => boolean = () => false): number {
        const adjacent: number = index + adjacencyChange
        if (adjacent < 0 || adjacent >= this.board.length || isBoardEdge(adjacent)) {
            return null
        }

        return adjacent
    }

}