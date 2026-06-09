import { TestBed } from '@angular/core/testing';

import { StockStore } from './stock-store';

describe('StockStore', () => {
  let service: StockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
