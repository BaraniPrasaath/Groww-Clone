import { TestBed } from '@angular/core/testing';

import { SeeMoreServices } from './see-more-services';

describe('SeeMoreServices', () => {
  let service: SeeMoreServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeeMoreServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
