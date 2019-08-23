import { StoreDocument } from './firestore';

export class TradeArgs {
    shares: number;
    price: number;
    commission?: number;
    ticker: string;
}

export class TradeDocument extends TradeArgs implements StoreDocument {
    key: string;
    timestamp: number;
    user: string;
}

export class TradeAggregate extends TradeArgs {
    invested: number;
    current?: number;
}

export const mockTrades: TradeDocument[] = [
    { key: '1234', user: 'jon', timestamp: 1234, shares: 10, price: 100, commission: 10, ticker: 'rbc' },
    { key: '1234', user: 'jon', timestamp: 1234, shares: 10, price: 110, commission: 10, ticker: 'rbc' },
]