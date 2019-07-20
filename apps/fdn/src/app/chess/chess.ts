import { ChessPiece } from './piece';
import { Cell } from './cell';


export class Chess {
    private rookMoveSet: [number, number][] = [[1,0], [-1,0], [0, 1], [0, -1]];
    private bishMoveSet: [number, number][] = [[1,1], [-1,1], [1, -1], [-1, -1]];
    private knightMoveSet: [number, number][] = [[2,1], [2,-1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    private cells: Cell<ChessPiece>[] = [];

    static inRange(num: number, min: number, max: number) {
        return num >= min && num <= max;
    }

    static move(row, col, piece: ChessPiece, cells: Cell<ChessPiece>[]): boolean {
        let moved = false;
        let _moves = Chess.getMoves(piece, cells);
        _moves.map(cell => {
            const [_row, _col] = cell;
            if (_row === row && _col === col) {
                piece.row = row;
                piece.col = col;
                moved = true;
                if (piece.name === 'pawn' && piece.moves.length > 1) {
                    piece.firstMove();
                }
            }
        })
        return moved;
    }

    static getMoves(piece: ChessPiece, cells: Cell<ChessPiece>[]): [number, number][] {
        const _cells = [];
        if (piece) {
            if (piece.finite) {
                for (let m of piece.moves) {
                    const [_x, _y] = m;
                    // check if out of bound
                    if (Chess.inRange(_x + piece.row, 1, 8) && Chess.inRange(_y + piece.col, 1, 8)) {
                        const move = [_x + piece.row, _y + piece.col];
                        let [x, y] = move;
                        let found = cells.find(cell => cell.row === x && cell.col === y && !!cell.piece);
                        if (!found || found.piece.black !== piece.black) {
                            _cells.push(move);
                        }
                    }
                }
            } else {
                for (let m of piece.moves) {
                    // get the directions for the move
                    const [_x, _y] = m;
                    // initialize the origin for this move set
                    let mx = piece.row;
                    let my = piece.col;
                    let done = false;
                    while (!done) {
                        mx += _x;
                        my += _y;
                        if (Chess.inRange(mx, 1, 8) && Chess.inRange(my, 1, 8)) {
                            // check if cell already has a piece
                            let found = cells.find(cell => {
                                if (cell.row === mx && cell.col === my && !!cell.piece) {
                                    return !!cell;
                                }
                            });
                            
                            if (found) {
                                done = true;
                                // add pieces of opposite team, then done
                                if (found.piece.black !== piece.black) {
                                    _cells.push([mx, my]);
                                }
                            } else {
                                _cells.push([mx, my]);
                            }
                        } else {
                            done = true;
                        }
                    }
                }
            }
        }
        return _cells;
    }

    initializeBoard(): Cell<ChessPiece>[] {
        this.initializeBlack().map(piece => this.addCell(piece.row, piece.col, piece));
        this.initializeBlank().map(cell => this.addCell(cell.row, cell.col));
        this.initializeWhite().map(piece => this.addCell(piece.row, piece.col, piece));
        return this.cells;
    }

    private initializeBlank(): Cell<ChessPiece>[] {
        const cells: Cell<ChessPiece>[] = [];
        for (let i = 3; i < 7; i++) {
            for (let j = 1; j < 9; j++) {
                let cell = new Cell<ChessPiece>();
                cell.row = i;
                cell.col = j;
                cells.push(cell);
            }
        }
        return cells;
    }

    private initializeBlack(): ChessPiece[] {
        const r1 = new ChessPiece('rook', this.rookMoveSet, 1, 1, false, true);
        const r2 = new ChessPiece('rook', this.rookMoveSet, 1, 8, false, true);

        const k1 = new ChessPiece('knight', this.knightMoveSet, 1, 2, true, true);
        const k2 = new ChessPiece('knight', this.knightMoveSet, 1, 7, true, true);

        const b1 = new ChessPiece('bishop', this.bishMoveSet, 1, 3, false, true);
        const b2 = new ChessPiece('bishop', this.bishMoveSet, 1, 6, false, true);

        const qn = new ChessPiece('queen', [...this.rookMoveSet, ...this.bishMoveSet], 1, 4, false, true);
        const kn = new ChessPiece('king', [...this.rookMoveSet, ...this.bishMoveSet], 1, 5, true, true);

        const pawns: ChessPiece[] = [];
        for (let i = 1; i < 9; i++) {
            pawns.push(new ChessPiece('pawn', [[1,0], [2,0]], 2, i, true, true));
        }
        return [r1, k1, b1, qn, kn, b2, k2, r2, ...pawns];
    }

    private initializeWhite(): ChessPiece[] {
        const r1 = new ChessPiece('rook', this.rookMoveSet, 8, 1, false, false);
        const r2 = new ChessPiece('rook', this.rookMoveSet, 8, 8, false, false);

        const k1 = new ChessPiece('knight', this.knightMoveSet, 8, 2, true, false);
        const k2 = new ChessPiece('knight', this.knightMoveSet, 8, 7, true, false);

        const b1 = new ChessPiece('bishop', this.bishMoveSet, 8, 3, false, false);
        const b2 = new ChessPiece('bishop', this.bishMoveSet, 8, 6, false, false);

        const qn = new ChessPiece('queen', [...this.rookMoveSet, ...this.bishMoveSet], 8, 4, false, false);
        const kn = new ChessPiece('king', [...this.rookMoveSet, ...this.bishMoveSet], 8, 5, true, false);

        const pawns: ChessPiece[] = [];
        for (let i = 1; i < 9; i++) {
            pawns.push(new ChessPiece('pawn', [[-1,0], [-2,0]], 7, i, true, false));
        }
        return [ ...pawns, r1, k1, b1, qn, kn, b2, k2, r2];
    }

    private addCell(row: number, col: number, piece: ChessPiece = null) {
        let cell = new Cell<ChessPiece>();
        cell.index = this.cells.length;
        cell.row = row;
        cell.col = col;
        cell.piece = piece;
        this.cells.push(cell);
    }

}

