import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomineeDetails } from './nominee-details';

describe('NomineeDetails', () => {
  let component: NomineeDetails;
  let fixture: ComponentFixture<NomineeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomineeDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomineeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
