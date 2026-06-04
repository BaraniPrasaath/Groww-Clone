import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatNavBar } from './float-nav-bar';

describe('FloatNavBar', () => {
  let component: FloatNavBar;
  let fixture: ComponentFixture<FloatNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatNavBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatNavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
