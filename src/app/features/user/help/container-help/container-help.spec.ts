import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerHelp } from './container-help';

describe('ContainerHelp', () => {
  let component: ContainerHelp;
  let fixture: ComponentFixture<ContainerHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerHelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerHelp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
