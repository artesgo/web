export class Cell<T> {
        index: number;
        row: number;
        col: number;
        selected: boolean;
        piece: T;
        inRange: boolean;
}