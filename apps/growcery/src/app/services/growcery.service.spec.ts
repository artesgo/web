import { TestBed } from '@angular/core/testing';

import { GrowceryService } from './growcery.service';

describe('GrowceryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrowceryService = TestBed.get(GrowceryService);
    expect(service).toBeTruthy();
  });
});
