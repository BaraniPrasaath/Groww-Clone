import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfGrow } from './etf-grow';

describe('EtfGrow', () => {
  let component: EtfGrow;
  let fixture: ComponentFixture<EtfGrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtfGrow],
    }).compileComponents();

    fixture = TestBed.createComponent(EtfGrow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
