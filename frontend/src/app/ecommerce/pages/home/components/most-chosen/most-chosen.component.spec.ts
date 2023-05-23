import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostChosenComponent } from './most-chosen.component';

describe('MostChosenComponent', () => {
  let component: MostChosenComponent;
  let fixture: ComponentFixture<MostChosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostChosenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostChosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
