import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnderConstructionComponent } from './page-under-construction.component';

describe('PageUnderConstructionComponent', () => {
  let component: PageUnderConstructionComponent;
  let fixture: ComponentFixture<PageUnderConstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageUnderConstructionComponent]
    });
    fixture = TestBed.createComponent(PageUnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
