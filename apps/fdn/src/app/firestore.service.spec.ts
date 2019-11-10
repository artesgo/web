import { TestBed } from '@angular/core/testing';

import { FirestoreService } from './firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('FirestoreService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFirestore,
          useValue: {
            collection: () => {
              let doc = () => {
                return {
                  delete: jest.fn(),
                  update: jest.fn(),
                  set: jest.fn()
                };
              };
              return {
                doc
              };
            }
          }
        }
      ]
    })
  );

  it('should be created', () => {
    const service: FirestoreService = TestBed.get(FirestoreService);
    expect(service).toBeTruthy();
  });

  it('should retrieve data', () => {});
});
