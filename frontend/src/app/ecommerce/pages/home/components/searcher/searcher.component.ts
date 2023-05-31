import { Component } from '@angular/core';

interface Data {
  from: string;
  to: string;
  date: string;
  option?: string;
}

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent {
  formData!: Data;
  selectedOption: string = 'avion';

  viewData(data: Data) {
    this.formData = data;
    this.formData.option = this.selectedOption;
    console.log(this.formData);
  }
}
