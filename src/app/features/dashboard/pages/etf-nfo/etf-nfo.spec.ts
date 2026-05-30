import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfNfo } from './etf-nfo';

describe('EtfNfo', () => {
  let component: EtfNfo;
  let fixture: ComponentFixture<EtfNfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtfNfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtfNfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
