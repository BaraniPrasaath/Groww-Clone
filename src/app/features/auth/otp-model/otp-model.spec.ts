import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpModel } from './otp-model';

describe('OtpModel', () => {
  let component: OtpModel;
  let fixture: ComponentFixture<OtpModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpModel],
    }).compileComponents();

    fixture = TestBed.createComponent(OtpModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
