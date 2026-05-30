import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsTrending } from './sectors-trending';

describe('SectorsTrending', () => {
  let component: SectorsTrending;
  let fixture: ComponentFixture<SectorsTrending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorsTrending]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorsTrending);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
