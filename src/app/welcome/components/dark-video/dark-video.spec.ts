import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkVideo } from './dark-video';

describe('DarkVideo', () => {
  let component: DarkVideo;
  let fixture: ComponentFixture<DarkVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkVideo],
    }).compileComponents();

    fixture = TestBed.createComponent(DarkVideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
