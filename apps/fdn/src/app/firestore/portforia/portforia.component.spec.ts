import { PortforiaComponent } from './portforia.component';
import { LayoutService } from './portforia.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('PortforiaComponent', () => {
  let component: PortforiaComponent;
  let mockLayoutService: LayoutService;
  let mockAngularFirestore: AngularFirestore;

  beforeEach(() => {
    mockLayoutService = new LayoutService(mockAngularFirestore);
    jest.spyOn(mockLayoutService, 'get');
    jest.spyOn(mockLayoutService, 'collection');
    jest.spyOn(mockLayoutService, 'addLayout');
    component = new PortforiaComponent(mockLayoutService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should retrieve data from layout service', () => {
  //   component.ngOnInit();
  //   expect(mockLayoutService.get).toBeCalledTimes(1);
  // });
});
