import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSuspeciousActivity } from './report-suspecious-activity';

describe('ReportSuspeciousActivity', () => {
  let component: ReportSuspeciousActivity;
  let fixture: ComponentFixture<ReportSuspeciousActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportSuspeciousActivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSuspeciousActivity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
