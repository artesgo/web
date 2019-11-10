import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowceryComponent } from './growcery.component';
import { GrowceryService } from '../services/growcery.service';
import { mockGrowceryList } from '../services/growcery.mock';
import { of } from 'rxjs';

describe('GrowceryComponent', () => {
  let component: GrowceryComponent;
  let service: GrowceryService;

  beforeEach(() => {
    service = new GrowceryService();
    component = new GrowceryComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make call to growcery service for items', () => {

    component.ngOnInit();
    let mockData = service.getGrowceryList();
    expect(component.growceryList$).toBe(mockData);
  });
});
