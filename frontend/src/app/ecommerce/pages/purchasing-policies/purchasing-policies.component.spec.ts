import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingPoliciesComponent } from './purchasing-policies.component';

describe('PurchasingPoliciesComponent', () => {
  let component: PurchasingPoliciesComponent;
  let fixture: ComponentFixture<PurchasingPoliciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasingPoliciesComponent]
    });
    fixture = TestBed.createComponent(PurchasingPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
