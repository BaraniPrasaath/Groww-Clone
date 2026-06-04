import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inr } from './inr';

describe('Inr', () => {
  let component: Inr;
  let fixture: ComponentFixture<Inr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
