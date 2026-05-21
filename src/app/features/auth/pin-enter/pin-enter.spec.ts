import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinEnter } from './pin-enter';

describe('PinEnter', () => {
  let component: PinEnter;
  let fixture: ComponentFixture<PinEnter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinEnter],
    }).compileComponents();

    fixture = TestBed.createComponent(PinEnter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
