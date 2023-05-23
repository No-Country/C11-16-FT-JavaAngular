import { Component, Input } from '@angular/core';

interface Popular {
  id: number;
  title: string;
  img: string;
}

@Component({
  selector: 'app-most-chosen',
  templateUrl: './most-chosen.component.html',
  styleUrls: ['./most-chosen.component.css'],
})
export class MostChosenComponent {
  @Input() popular!: Popular[];
}
