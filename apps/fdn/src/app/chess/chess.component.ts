import { Component, OnInit } from '@angular/core';
import { ChessPiece } from './piece';
import { Chess } from './chess';
import { Cell } from './cell';

@Component({
  selector: 'fdn-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {
  // to create the dom for our chess game, we need to define an 8x8 grid, or 64 cells
  cells: Cell<ChessPiece>[];
  selectedCell: Cell<ChessPiece>;
  chess: Chess;
  pieces: ChessPiece[];
  whiteTurn = true;
  attack = false;
  rowSizes = [];
  colSizes = [];
  colHeader = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  ngOnInit() {
    // initialize chess board
    this.chess = new Chess();
    this.cells = this.chess.initializeBoard();

    // setup css grid sizes
    for (let i = 0; i < 8; i++) {
      this.rowSizes = [ ...this.rowSizes, { value: 1, unit: "fr" }];
      this.colSizes = [ ...this.colSizes, { value: 1, unit: "fr" }];
    }
  }

  select(cell: Cell<ChessPiece>): void {
    if (cell.inRange) {
      // move the selected piece
      this.selectedCell.piece.col = cell.col;
      this.selectedCell.piece.row = cell.row;
      // assign piece to other cell
      cell.piece = this.selectedCell.piece; // if other cell had enemy piece, it would get overridden, removing it from game
      this.selectedCell.piece = null;
      // remove selected state from cell
      this.selectedCell.selected = false;
      this.whiteTurn = !this.whiteTurn;
      this.dehighlightMoves();
    } else {
      if (this.selectedCell) {
        this.selectedCell.selected = false;
      }

      this.selectedCell = cell;

      if (this.selectedCell.piece) {
        if (this.whiteTurn && !this.selectedCell.piece.black) {
          this.selectedCell.selected = true;
          this.highlightMoves();
        } else if (!this.whiteTurn && this.selectedCell.piece.black) {
          this.selectedCell.selected = true;
          this.highlightMoves();
        }
      } else {
        this.dehighlightMoves();
      }
    }
  }

  highlightMoves() {
    Chess.getMoves(this.selectedCell.piece, this.cells).map(move => {
      let [_row, _col] = move;
      this.cells = this.cells.map(cell => {
        if (cell.row === _row && cell.col === _col) {
          cell.inRange = true;
        }
        return cell;
      });
    });
  }

  dehighlightMoves() {
    this.cells = this.cells.map(cell => {
      cell.inRange = false;
      return cell;
    });
  }

  trackIndex(cell: Cell<ChessPiece>) {
    return cell.index;
  }

  getCol(col: number) {
    return this.colHeader[col - 1];
  }

  getRow(row: number) {
    return Math.abs(row - 9);
  }
}
