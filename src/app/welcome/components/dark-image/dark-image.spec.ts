import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkImage } from './dark-image';

describe('DarkImage', () => {
  let component: DarkImage;
  let fixture: ComponentFixture<DarkImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkImage],
    }).compileComponents();

    fixture = TestBed.createComponent(DarkImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
