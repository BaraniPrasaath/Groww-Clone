import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorTrending } from './sector-trending';

describe('SectorTrending', () => {
  let component: SectorTrending;
  let fixture: ComponentFixture<SectorTrending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorTrending],
    }).compileComponents();

    fixture = TestBed.createComponent(SectorTrending);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
