import { Trade } from './trade';

export class TradeUtils {
    static parser(id: string, tradesData: any): Trade {
        const trade = new Trade();
        trade.id = id;
        trade.raw = tradesData;
        trade.trades = [];
        Object.keys(tradesData).map(key => {
            if (key !== 'key') {
                tradesData[key].map( t => {
                    let [type, timestamp, shares, price, commish] = t.split(',');
                    trade.trades.push({
                        type: type, // optional,
                        timestamp: Number.parseInt(timestamp, 10),
                        shares: Number.parseInt(shares, 10),
                        price: Number.parseFloat(price),
                        commission: Number.parseFloat(commish),
                        ticker: key
                    });
                })
            }
        })
        return trade;
    }
}
