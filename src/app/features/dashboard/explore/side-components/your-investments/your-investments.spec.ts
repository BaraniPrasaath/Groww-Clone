import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourInvestments } from './your-investments';

describe('YourInvestments', () => {
  let component: YourInvestments;
  let fixture: ComponentFixture<YourInvestments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourInvestments],
    }).compileComponents();

    fixture = TestBed.createComponent(YourInvestments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
