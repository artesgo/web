export class Trade {
    trades: Transaction[];
    raw: string[];
    id: string;
}

export class Transaction {
    type: string; // buy / sell
    timestamp: number;
    shares: number;
    price: number;
    commission?: number;
    ticker: string;
}
