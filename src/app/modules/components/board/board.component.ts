import { Component, OnInit } from '@angular/core';
import { GameStatusEnum } from 'src/app/core/models/GameStatusEnum';
import { TicTacToeGame } from 'src/app/core/services/tic_tac_toe/TicTacToeGame';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  ticTacToe: TicTacToeGame
  winner: string

  constructor() { }

  ngOnInit() {
    this.newGame()
  }

  newGame() {
    this.ticTacToe = new TicTacToeGame()
    this.ticTacToe.game.gameStatus = GameStatusEnum.ONGOING
    this.winner = null
  }

  get player() {
    return this.ticTacToe.game.getCurrentPlayer()
  }

  get playerPiece() {
    return this.player.getPiece().name
  }

  get gameBoard() {
    return this.ticTacToe.game.board.board
  }

  makeMove(idx: number) {
    this.winner = this.ticTacToe.takeTurn(idx)
  }

}
