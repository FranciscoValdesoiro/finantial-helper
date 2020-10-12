import { TestBed } from '@angular/core/testing';

import { JarsStoreService } from './jars-store.service';

describe('JarsStoreService', () => {
  let service: JarsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JarsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
