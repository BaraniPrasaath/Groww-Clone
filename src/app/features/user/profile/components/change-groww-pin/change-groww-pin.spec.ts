import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeGrowwPin } from './change-groww-pin';

describe('ChangeGrowwPin', () => {
  let component: ChangeGrowwPin;
  let fixture: ComponentFixture<ChangeGrowwPin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeGrowwPin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeGrowwPin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
