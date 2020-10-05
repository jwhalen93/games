import { Board } from "src/app/core/models/Board"

describe('Board', () => {
    const squareBoard: Board<string> = new Board(3, 3)
    const rectBoard: Board<string> = new Board(4, 5)

    it('verify index parsing on square', () => {
        const [x, y] = squareBoard.getDimensionsFor(5)

        expect(2).toEqual(x)
        expect(1).toEqual(y)
    })

    it('verify index parsing on rectangle', () => {
        const [x, y] = rectBoard.getDimensionsFor(13)

        expect(1).toEqual(x)
        expect(3).toEqual(y)

        const [x2, y2] = rectBoard.getDimensionsFor(19)

        expect(3).toEqual(x2)
        expect(4).toEqual(y2)
    })

    it('verify dimension parsing on square', () => {
        const index: number = squareBoard.getIndexFor(1, 2)

        expect(7).toEqual(index)
    })

    it('verify dimension parsing on rectangle', () => {
        const index: number = rectBoard.getIndexFor(3, 2)

        expect(11).toEqual(index)

        const index2: number = rectBoard.getIndexFor(1, 4)

        expect(17).toEqual(index2)
    })

    it('verify adjacent checks', () => {
        const rightShouldBeNull: number = rectBoard.getIndexToRight(3)
        const rightIndex: number = rectBoard.getIndexToRight(5)

        expect(rightShouldBeNull).toBeNull()
        expect(rightIndex).toEqual(6)

        const leftShouldBeNull: number = rectBoard.getIndexToLeft(4)
        const leftIndex: number = rectBoard.getIndexToLeft(5)

        expect(leftShouldBeNull).toBeNull()
        expect(leftIndex).toEqual(4)

        const topShouldBeNull: number = rectBoard.getIndexAbove(1)
        const topIndex: number = rectBoard.getIndexAbove(5)

        expect(topShouldBeNull).toBeNull()
        expect(topIndex).toEqual(1)

        const belowShouldBeNull: number = rectBoard.getIndexBelow(17)
        const belowIndex: number = rectBoard.getIndexBelow(13)

        expect(belowShouldBeNull).toBeNull()
        expect(belowIndex).toEqual(17)
    })
})