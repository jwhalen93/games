import { Piece } from 'src/app/core/models/Piece'

export class Player {
    public static PLAYER_COUNT: number = 0
    id: number
    name: string
    ownedPiece: Piece

    constructor(name: string) {
        Player.PLAYER_COUNT++

        this.id = Player.PLAYER_COUNT
        this.name = name
        this.ownedPiece = null
    }

    addPiece(piece: Piece) {
        this.ownedPiece = piece
    }

    getPiece(): Piece {
        return this.ownedPiece
    }

}