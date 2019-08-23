import { StoreDocument } from './firestore';

export class Layout implements StoreDocument {
    key: string;
    row: number;
    rowspan: number;
    col: number;
    colspan: number;
    content: string;
    type?: string; // default to text content
    alignment?: number; // default to top left
    raw: string;
    id: string;
}