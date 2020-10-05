import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/core/models/Board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: Board<string>
  xIsNext: boolean
  winner: string

  constructor() { }

  ngOnInit() {
    this.newGame()
  }

  newGame() {
    this.squares = new Board<string>(3, 3)
    this.winner = null
    this.xIsNext = true
  }

  get player() {
    return this.xIsNext ? 'X' : 'O'
  }

  makeMove(idx: number) {
    if (this.winner !== null && this.winner.includes('won')) {
      return
    }

    if (!this.squares[idx]) {
      this.squares.board.splice(idx, 1, this.player)
      this.xIsNext = !this.xIsNext
    }

    this.winner = this.calculateWinner()
  }

  calculateWinner() {
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

    const board = this.squares.board
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return `Player ${board[a]} won the game!`
      }
    }

    if (!board.some(square => square === null)) {
      return 'Draw!'
    }

    return null
  }

}
