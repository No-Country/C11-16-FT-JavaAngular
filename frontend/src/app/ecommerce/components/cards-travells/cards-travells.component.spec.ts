import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTravellsComponent } from './cards-travells.component';

describe('CardsTravellsComponent', () => {
  let component: CardsTravellsComponent;
  let fixture: ComponentFixture<CardsTravellsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsTravellsComponent]
    });
    fixture = TestBed.createComponent(CardsTravellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
