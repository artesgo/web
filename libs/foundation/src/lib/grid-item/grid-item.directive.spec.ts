import { GridItemDirective } from './grid-item.directive';

describe('GridItemDirective', () => {
  it('should create an instance', () => {
    let mockRef;
    const directive = new GridItemDirective(mockRef);
    expect(directive).toBeTruthy();
  });
});
