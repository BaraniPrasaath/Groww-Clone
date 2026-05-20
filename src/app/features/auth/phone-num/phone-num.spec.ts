import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNum } from './phone-num';

describe('PhoneNum', () => {
  let component: PhoneNum;
  let fixture: ComponentFixture<PhoneNum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneNum],
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneNum);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
