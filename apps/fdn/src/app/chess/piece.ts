export class ChessPiece {
    public first = true;
    private _moves: any[];

    constructor(
        public name: string,
        public moves: [number, number][],
        public row: number,
        public col: number,
        public finite: boolean, // if move is infinite or finite
        public black: boolean,
    ) {}

    firstMove() {
        this.moves.pop();
    }
}
