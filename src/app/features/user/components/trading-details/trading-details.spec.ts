import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingDetails } from './trading-details';

describe('TradingDetails', () => {
  let component: TradingDetails;
  let fixture: ComponentFixture<TradingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
