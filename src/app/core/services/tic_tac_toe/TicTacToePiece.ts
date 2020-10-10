import { Piece } from 'src/app/core/models/Piece';

export class TicTacToePiece extends Piece {
    symbol: string

    constructor(symbol: string) {
        super('Tic Tac Toe symbol')
        this.symbol = symbol
    }
}