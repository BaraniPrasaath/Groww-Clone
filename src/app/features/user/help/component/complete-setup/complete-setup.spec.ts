import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSetup } from './complete-setup';

describe('CompleteSetup', () => {
  let component: CompleteSetup;
  let fixture: ComponentFixture<CompleteSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteSetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteSetup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
