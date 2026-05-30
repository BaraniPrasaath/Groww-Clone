import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveTwoWeekHigh } from './five-two-week-high';

describe('FiveTwoWeekHigh', () => {
  let component: FiveTwoWeekHigh;
  let fixture: ComponentFixture<FiveTwoWeekHigh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveTwoWeekHigh]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveTwoWeekHigh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
