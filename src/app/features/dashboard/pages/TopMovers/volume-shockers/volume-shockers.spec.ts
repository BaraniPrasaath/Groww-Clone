import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeShockers } from './volume-shockers';

describe('VolumeShockers', () => {
  let component: VolumeShockers;
  let fixture: ComponentFixture<VolumeShockers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolumeShockers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumeShockers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
