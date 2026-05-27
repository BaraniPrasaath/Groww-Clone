import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostBoughtStocks } from './most-bought-stocks';

describe('MostBoughtStocks', () => {
  let component: MostBoughtStocks;
  let fixture: ComponentFixture<MostBoughtStocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostBoughtStocks],
    }).compileComponents();

    fixture = TestBed.createComponent(MostBoughtStocks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
