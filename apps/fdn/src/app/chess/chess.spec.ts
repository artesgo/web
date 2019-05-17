import { ChessPiece } from './piece';
import { Cell } from './cell';
import { Chess } from './chess';


fdescribe('Chess', () => {
    let chess: Chess;
    let cells: Cell<ChessPiece>[];
    beforeEach(() => {
        chess = new Chess();
        cells = chess.initializeBoard();
    });

    it('should instantiate chess object', () => {
        expect(cells.length).toBe(64);
    });

    it('should get the moves for A8 Rook without pawns', () => {
        let noPawns = cells.map(cell => {
            if (cell.piece && cell.piece.name === 'pawn') {
                cell.piece = null;
            }
            return cell;
        });
        // get A8 rook
        let moves = Chess.getMoves(noPawns[0].piece, noPawns);
        // expect rook to traverse straight and be able to attack opposing rook
        expect(moves.length).toBe(7);
    });
});
  