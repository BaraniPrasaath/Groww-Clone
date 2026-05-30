import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtfMostTraded } from './mtf-most-traded';

describe('MtfMostTraded', () => {
  let component: MtfMostTraded;
  let fixture: ComponentFixture<MtfMostTraded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtfMostTraded]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtfMostTraded);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
