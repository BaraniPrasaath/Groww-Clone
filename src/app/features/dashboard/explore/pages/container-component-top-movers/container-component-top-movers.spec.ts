import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponentTopMovers } from './container-component-top-movers';

describe('ContainerComponentTopMovers', () => {
  let component: ContainerComponentTopMovers;
  let fixture: ComponentFixture<ContainerComponentTopMovers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerComponentTopMovers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerComponentTopMovers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
