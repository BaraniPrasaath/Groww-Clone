import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellAuthorizationMode } from './sell-authorization-mode';

describe('SellAuthorizationMode', () => {
  let component: SellAuthorizationMode;
  let fixture: ComponentFixture<SellAuthorizationMode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellAuthorizationMode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellAuthorizationMode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
