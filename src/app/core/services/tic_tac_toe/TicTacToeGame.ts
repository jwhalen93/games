import { Game } from 'src/app/core/models/Game';
import { GameStatusEnum } from 'src/app/core/models/GameStatusEnum';
import { Piece } from 'src/app/core/models/Piece';
import { Player } from 'src/app/core/models/Player';

export class TicTacToeGame {
    static readonly PIECE_SYMBOL: string = 'symbol'

    game: Game
    sessionName: string
    statusMessage: string

    constructor();
    constructor(sessionName: string = '') {
        this.game = this.createGame()
        this.sessionName = sessionName
        this.statusMessage = ''
    }

    createGame(): Game {
        const game = new Game('Tic Tac Toe', 3, 3)

        game.addPlayers(...this.createPlayers())
        game.addPieces(...this.createPieces())

        game.players.forEach((player, index) => {
            player.addPiece(game.pieces[index])
        })
        return game
    }

    createPlayers(): Player[] {
        return [
            new Player("Player 1"),
            new Player("Player 2")
        ]
    }

    createPieces(): Piece[] {
        return [
            new Piece('X'),
            new Piece('O')
        ]
    }

    takeTurn(index: number): string {
        const player: Player = this.game.getCurrentPlayer()
        if (GameStatusEnum.ONGOING !== this.game.gameStatus) {
            return this.getEndgameMessage(player.name)
        }

        if (!this.game.board.hasPiece(index)) {
            const piece: Piece = player.getPiece()
            this.game.board.pushPieceToBoard(index, piece)
            this.game.gameStatus = this.getCurrentGameStatus()
            const endGameMessage = this.getEndgameMessage(player.name)
            if (!endGameMessage) {
                this.game.setNextPlayer()
            }

            return endGameMessage
        }
    }

    getEndgameMessage(playerName: string): string {
        switch (this.game.gameStatus) {
            case GameStatusEnum.WIN: {
                return `Congratulations ${playerName}! You have won the game!`
            }
            case GameStatusEnum.DRAW: {
                return 'Draw!'
            }
        }
    }

    getCurrentGameStatus(): GameStatusEnum {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        const board = this.game.board.board
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (
                board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]
            ) {
                return GameStatusEnum.WIN
            }
        }

        if (!board.some(square => square === null)) {
            return GameStatusEnum.DRAW
        }

        return GameStatusEnum.ONGOING
    }

}