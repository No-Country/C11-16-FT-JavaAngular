import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentQuestionsComponent } from './frequent-questions.component';

describe('FrequentQuestionsComponent', () => {
  let component: FrequentQuestionsComponent;
  let fixture: ComponentFixture<FrequentQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequentQuestionsComponent]
    });
    fixture = TestBed.createComponent(FrequentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
