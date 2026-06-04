import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingControlls } from './trading-controlls';

describe('TradingControlls', () => {
  let component: TradingControlls;
  let fixture: ComponentFixture<TradingControlls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingControlls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingControlls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
