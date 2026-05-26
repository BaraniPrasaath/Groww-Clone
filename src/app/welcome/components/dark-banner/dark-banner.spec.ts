import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkBanner } from './dark-banner';

describe('DarkBanner', () => {
  let component: DarkBanner;
  let fixture: ComponentFixture<DarkBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(DarkBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
