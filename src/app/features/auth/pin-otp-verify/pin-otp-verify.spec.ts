import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinOtpVerify } from './pin-otp-verify';

describe('PinOtpVerify', () => {
  let component: PinOtpVerify;
  let fixture: ComponentFixture<PinOtpVerify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinOtpVerify],
    }).compileComponents();

    fixture = TestBed.createComponent(PinOtpVerify);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
