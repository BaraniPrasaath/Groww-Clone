import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAnime } from './grid-anime';

describe('GridAnime', () => {
  let component: GridAnime;
  let fixture: ComponentFixture<GridAnime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridAnime],
    }).compileComponents();

    fixture = TestBed.createComponent(GridAnime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
