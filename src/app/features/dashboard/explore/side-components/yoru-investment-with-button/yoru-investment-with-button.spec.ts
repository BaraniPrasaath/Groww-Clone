import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoruInvestmentWithButton } from './yoru-investment-with-button';

describe('YoruInvestmentWithButton', () => {
  let component: YoruInvestmentWithButton;
  let fixture: ComponentFixture<YoruInvestmentWithButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoruInvestmentWithButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoruInvestmentWithButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
