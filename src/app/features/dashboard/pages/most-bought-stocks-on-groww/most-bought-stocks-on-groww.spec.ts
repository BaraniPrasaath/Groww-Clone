import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostBoughtStocksOnGroww } from './most-bought-stocks-on-groww';

describe('MostBoughtStocksOnGroww', () => {
  let component: MostBoughtStocksOnGroww;
  let fixture: ComponentFixture<MostBoughtStocksOnGroww>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostBoughtStocksOnGroww],
    }).compileComponents();

    fixture = TestBed.createComponent(MostBoughtStocksOnGroww);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
