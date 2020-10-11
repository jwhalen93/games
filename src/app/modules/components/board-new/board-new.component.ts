import { Component, OnInit } from '@angular/core';
import { BoardNew } from 'src/app/core/models/BoardNew';

@Component({
  selector: 'board-new',
  templateUrl: './board-new.component.html',
  styleUrls: ['./board-new.component.css']
})
export class BoardNewComponent implements OnInit {
  board: BoardNew<string>
  xIsNext: boolean
  winner: string
  totalRows = 6;
  totalColumns = 8;
  win = 3;

  constructor() { }

  ngOnInit() {
    this.newGame()
  }

  newGame() {
    this.board = new BoardNew<string>(this.totalRows, this.totalColumns)
    this.winner = null
    this.xIsNext = true
    this.printBoard();
  }

  printBoard() {
    for (let x = 0; x < this.totalColumns; x++) {
      for (let y = 0; y < this.totalRows; y++) {
        console.log('index: (' + x + ', ' + y + ') - value: ' + this.board.squares[x][y])
      }
    }
  }
  get player() {
    return this.xIsNext ? 'X' : 'O'
  }

  makeMove(row: number, column: number) {
    if (this.winner) {
      return;
    }
    console.log('making move on square: (' + row + ', ' + column + ')');
    this.board.squares[column][row] = this.player;
    this.calculateWinner(row, column);
    this.xIsNext = !this.xIsNext;
    this.printBoard();
  }

  calculateWinner(row: number, column: number) {
    if (this.checkForHorizontalWin(row, column) ||
        this.checkForVerticalWin(row, column) ||
        this.checkForDiagonalDownRightWin(row, column) ||
        this.checkForDiagonalUpRightWin(row, column)) {
      this.winner = this.player;
    }
  }

  checkForHorizontalWin(row: number, column: number) {
    var countRight = this.checkForHorizontalCount(row, column + 1, 1);
    var countLeft = this.checkForHorizontalCount(row, column - 1, -1);
    return countRight + countLeft + 1 === this.win;
  }
  checkForHorizontalCount(row: number, column: number, num: number) {
    if (column >= this.totalColumns) {
      return 0
    } else if (column < 0) {
      return 0
    }
    if (this.board.squares[column][row] === this.player) {
      return this.checkForHorizontalCount(row, column + num, num) + 1;
    } else {
      return 0
    }
  }

  checkForVerticalWin(row: number, column: number) {
    var countUp = this.checkForVerticalCount(row + 1, column, 1);
    var countDown = this.checkForVerticalCount(row - 1, column, -1);
    return countUp + countDown + 1 === this.win;
  }
  checkForVerticalCount(row: number, column: number, num: number) {
    if (row >= this.totalRows || row < 0) {
      return 0
    }
    if (this.board.squares[column][row] === this.player) {
      return this.checkForVerticalCount(row + num, column, num) + 1;
    } else {
      return 0
    }
  }

  checkForDiagonalDownRightWin(row: number, column: number) {
    var countRight = this.checkForDiagonalDownRightCount(row + 1, column + 1, 1);
    var countLeft = this.checkForDiagonalDownRightCount(row - 1, column - 1, -1);
    return countRight + countLeft + 1 === this.win;
  }
  checkForDiagonalDownRightCount(row: number, column: number, num: number) {
    if (column >= this.totalColumns || row >= this.totalRows || column < 0 || row < 0) {
      return 0
    }
    if (this.board.squares[column][row] === this.player) {
      return this.checkForDiagonalDownRightCount(row + num, column + num, num) + 1;
    } else {
      return 0
    }
  }

  checkForDiagonalUpRightWin(row: number, column: number) {
    var countRight = this.checkForDiagonalUpRightCount(row - 1, column + 1, 1);
    var countLeft = this.checkForDiagonalUpRightCount(row + 1, column - 1, -1);
    return countRight + countLeft + 1 === this.win;
  }
  checkForDiagonalUpRightCount(row: number, column: number, num: number) {
    if (column >= this.totalColumns || row >= this.totalRows || column < 0 || row < 0) {
      return 0
    }
    if (this.board.squares[column][row] === this.player) {
      return this.checkForDiagonalUpRightCount(row - num, column + num, num) + 1;
    } else {
      return 0
    }
  }
}
