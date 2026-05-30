import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfScreener } from './etf-screener';

describe('EtfScreener', () => {
  let component: EtfScreener;
  let fixture: ComponentFixture<EtfScreener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtfScreener]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtfScreener);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
