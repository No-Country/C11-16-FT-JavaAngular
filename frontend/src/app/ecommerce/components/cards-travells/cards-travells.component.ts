import { Component, Input } from '@angular/core';
import { TripModifie } from 'src/app/interfaces/trip_interface';

@Component({
  selector: 'app-cards-travells',
  templateUrl: './cards-travells.component.html',
  styleUrls: ['./cards-travells.component.css'],
})
export class CardsTravellsComponent {
  @Input() travell!: TripModifie;
}
