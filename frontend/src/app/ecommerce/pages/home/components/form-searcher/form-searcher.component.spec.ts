import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearcherComponent } from './form-searcher.component';

describe('FormSearcherComponent', () => {
  let component: FormSearcherComponent;
  let fixture: ComponentFixture<FormSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
