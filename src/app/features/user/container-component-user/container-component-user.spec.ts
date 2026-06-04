import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponentUser } from './container-component-user';

describe('ContainerComponentUser', () => {
  let component: ContainerComponentUser;
  let fixture: ComponentFixture<ContainerComponentUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerComponentUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerComponentUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
