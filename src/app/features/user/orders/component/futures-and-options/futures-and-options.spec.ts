import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturesAndOptions } from './futures-and-options';

describe('FuturesAndOptions', () => {
  let component: FuturesAndOptions;
  let fixture: ComponentFixture<FuturesAndOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturesAndOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturesAndOptions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
