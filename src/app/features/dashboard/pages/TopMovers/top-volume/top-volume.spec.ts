import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVolume } from './top-volume';

describe('TopVolume', () => {
  let component: TopVolume;
  let fixture: ComponentFixture<TopVolume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopVolume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopVolume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
