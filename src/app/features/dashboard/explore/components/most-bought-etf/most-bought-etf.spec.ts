import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostBoughtEtf } from './most-bought-etf';

describe('MostBoughtEtf', () => {
  let component: MostBoughtEtf;
  let fixture: ComponentFixture<MostBoughtEtf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostBoughtEtf],
    }).compileComponents();

    fixture = TestBed.createComponent(MostBoughtEtf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
