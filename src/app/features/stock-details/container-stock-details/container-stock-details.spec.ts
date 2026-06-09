import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerStockDetails } from './container-stock-details';

describe('ContainerStockDetails', () => {
  let component: ContainerStockDetails;
  let fixture: ComponentFixture<ContainerStockDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerStockDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerStockDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
