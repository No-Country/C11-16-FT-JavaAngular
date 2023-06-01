import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTravellComponent } from './view-travell.component';

describe('ViewTravellComponent', () => {
  let component: ViewTravellComponent;
  let fixture: ComponentFixture<ViewTravellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTravellComponent]
    });
    fixture = TestBed.createComponent(ViewTravellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
