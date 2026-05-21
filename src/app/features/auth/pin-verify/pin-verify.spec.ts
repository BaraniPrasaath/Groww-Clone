import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinVerify } from './pin-verify';

describe('PinVerify', () => {
  let component: PinVerify;
  let fixture: ComponentFixture<PinVerify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinVerify],
    }).compileComponents();

    fixture = TestBed.createComponent(PinVerify);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
