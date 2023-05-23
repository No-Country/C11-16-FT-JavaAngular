import { Component } from '@angular/core';

interface Data {
  from: string;
  to: string;
  date: string;
}

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent {
  formData!: Data;

  viewData(data: Data) {
    this.formData = data;
    console.log(this.formData);
  }
}
