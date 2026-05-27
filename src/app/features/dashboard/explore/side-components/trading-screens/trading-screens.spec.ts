import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingScreens } from './trading-screens';

describe('TradingScreens', () => {
  let component: TradingScreens;
  let fixture: ComponentFixture<TradingScreens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingScreens],
    }).compileComponents();

    fixture = TestBed.createComponent(TradingScreens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
