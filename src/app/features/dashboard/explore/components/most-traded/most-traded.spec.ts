import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostTraded } from './most-traded';

describe('MostTraded', () => {
  let component: MostTraded;
  let fixture: ComponentFixture<MostTraded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostTraded],
    }).compileComponents();

    fixture = TestBed.createComponent(MostTraded);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
