import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPurchaseComponent } from './summary-purchase.component';

describe('SummaryPurchaseComponent', () => {
  let component: SummaryPurchaseComponent;
  let fixture: ComponentFixture<SummaryPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryPurchaseComponent]
    });
    fixture = TestBed.createComponent(SummaryPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
