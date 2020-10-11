export class BoardNew<T> {
    readonly totalColumns: number
    readonly totalRows: number
    readonly squares: T[][]

    constructor(totalRows: number, totalColumns: number) {
        this.totalColumns = totalColumns;
        this.totalRows = totalRows;
        this.squares = new Array<Array<T>>();
        console.log('creating ' + totalRows + ' by ' + totalColumns + ' grid')
        for (let x = 0; x < this.totalColumns; x++) {
            let row: T[] = new Array<T>();
            for (let y = 0; y < this.totalRows; y++) {
                row.push(undefined)
            }
            this.squares.push(row);
        }
    }
}