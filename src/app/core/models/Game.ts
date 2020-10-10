import { Board } from 'src/app/core/models/Board';
import { GameStatusEnum } from 'src/app/core/models/GameStatusEnum';
import { Piece } from 'src/app/core/models/Piece';
import { Player } from 'src/app/core/models/Player';

export class Game {
    readonly name: string
    readonly players: Array<Player>
    readonly board: Board
    readonly pieces: Array<Piece>
    currentPlayerIndex: number
    gameStatus: GameStatusEnum

    constructor(name: string, boardWidth: number, boardHeight: number) {
        this.name = name
        this.board = new Board(boardWidth, boardHeight)
        this.gameStatus = GameStatusEnum.PREGAME
        this.currentPlayerIndex = 0
        this.players = []
        this.pieces = []
    }

    addPlayers(...player: Player[]) {
        this.players.push(...player)
    }

    addPieces(...piece: Piece[]) {
        this.pieces.push(...piece)
    }

    get $gameStatus(): GameStatusEnum {
        return this.gameStatus
    }

    getCurrentPlayer(): Player {
        return this.players[this.currentPlayerIndex]
    }

    setNextPlayer() {
        if (this.currentPlayerIndex < this.players.length - 1) {
            this.currentPlayerIndex++
        } else {
            this.currentPlayerIndex = 0
        }
    }

    setCurrentPlayer(index: number) {
        this.currentPlayerIndex = index
    }

    getTotalPlayers(): number {
        return this.players.length
    }

}