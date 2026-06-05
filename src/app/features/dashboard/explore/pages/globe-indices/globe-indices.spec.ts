import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeIndices } from './globe-indices';

describe('GlobeIndices', () => {
  let component: GlobeIndices;
  let fixture: ComponentFixture<GlobeIndices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobeIndices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobeIndices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
