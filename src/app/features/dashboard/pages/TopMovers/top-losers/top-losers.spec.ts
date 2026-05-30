import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLosers } from './top-losers';

describe('TopLosers', () => {
  let component: TopLosers;
  let fixture: ComponentFixture<TopLosers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopLosers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopLosers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
