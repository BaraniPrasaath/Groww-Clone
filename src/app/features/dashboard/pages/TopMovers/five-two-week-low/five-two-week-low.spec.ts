import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveTwoWeekLow } from './five-two-week-low';

describe('FiveTwoWeekLow', () => {
  let component: FiveTwoWeekLow;
  let fixture: ComponentFixture<FiveTwoWeekLow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveTwoWeekLow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveTwoWeekLow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
