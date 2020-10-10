export class Piece {
    name: string
    description: string

    constructor(name: string)
    constructor(name: string, description: string = '') {
        this.name = name
        this.description = description
    }


}