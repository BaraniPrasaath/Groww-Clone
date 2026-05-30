import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntradayStocksScreener } from './intraday-stocks-screener';

describe('IntradayStocksScreener', () => {
  let component: IntradayStocksScreener;
  let fixture: ComponentFixture<IntradayStocksScreener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntradayStocksScreener]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntradayStocksScreener);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
