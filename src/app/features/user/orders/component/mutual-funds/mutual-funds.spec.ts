import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFunds } from './mutual-funds';

describe('MutualFunds', () => {
  let component: MutualFunds;
  let fixture: ComponentFixture<MutualFunds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutualFunds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutualFunds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
