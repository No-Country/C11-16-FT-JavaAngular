import { Component, Input } from '@angular/core';

interface Travell {
  id: number;
  title: string;
  location: string;
  option: string;
  days: string;
  price: number;
}

@Component({
  selector: 'app-cards-travells',
  templateUrl: './cards-travells.component.html',
  styleUrls: ['./cards-travells.component.css'],
})
export class CardsTravellsComponent {
  @Input() travell!: Travell;
}
