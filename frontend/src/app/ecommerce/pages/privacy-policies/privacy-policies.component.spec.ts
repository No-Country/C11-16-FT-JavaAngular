import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPoliciesComponent } from './privacy-policies.component';

describe('PrivacyPoliciesComponent', () => {
  let component: PrivacyPoliciesComponent;
  let fixture: ComponentFixture<PrivacyPoliciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyPoliciesComponent]
    });
    fixture = TestBed.createComponent(PrivacyPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
