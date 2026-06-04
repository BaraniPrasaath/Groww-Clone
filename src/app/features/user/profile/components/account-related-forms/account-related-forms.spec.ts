import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRelatedForms } from './account-related-forms';

describe('AccountRelatedForms', () => {
  let component: AccountRelatedForms;
  let fixture: ComponentFixture<AccountRelatedForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountRelatedForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountRelatedForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
