import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketNewsStocks } from './market-news-stocks';

describe('MarketNewsStocks', () => {
  let component: MarketNewsStocks;
  let fixture: ComponentFixture<MarketNewsStocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketNewsStocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketNewsStocks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
