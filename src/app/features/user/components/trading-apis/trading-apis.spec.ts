import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingApis } from './trading-apis';

describe('TradingApis', () => {
  let component: TradingApis;
  let fixture: ComponentFixture<TradingApis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingApis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingApis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
