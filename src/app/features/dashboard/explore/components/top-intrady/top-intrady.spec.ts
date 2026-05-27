import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopIntrady } from './top-intrady';

describe('TopIntrady', () => {
  let component: TopIntrady;
  let fixture: ComponentFixture<TopIntrady>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopIntrady],
    }).compileComponents();

    fixture = TestBed.createComponent(TopIntrady);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
