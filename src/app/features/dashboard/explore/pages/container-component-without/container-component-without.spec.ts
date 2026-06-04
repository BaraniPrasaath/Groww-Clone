import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponentWithout } from './container-component-without';

describe('ContainerComponentWithout', () => {
  let component: ContainerComponentWithout;
  let fixture: ComponentFixture<ContainerComponentWithout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerComponentWithout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerComponentWithout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
