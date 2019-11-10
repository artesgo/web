import { TradePipe } from './trade.pipe';
import { mockTrades } from './trade';

describe('TradePipe', () => {
  const mocks = mockTrades;

  it('create an instance', () => {
    const pipe = new TradePipe();
    expect(pipe).toBeTruthy();
  });

  describe('transforms', () => {
    it('should return original data when no args provided', () => {
      const pipe = new TradePipe();
      const filtered = pipe.transform(mocks, '');
      expect(filtered.length).toBe(2);
    });

    it('should filtered data when filter provided', () => {
      const pipe = new TradePipe();
      const filtered = pipe.transform(mocks, 'rbc');
      expect(filtered.length).toBe(2);
    });

    it('should nothing when filter does not match anything', () => {
      const pipe = new TradePipe();
      const filtered = pipe.transform(mocks, 'rbac');
      expect(filtered.length).toBe(0);
    });
  });
});
