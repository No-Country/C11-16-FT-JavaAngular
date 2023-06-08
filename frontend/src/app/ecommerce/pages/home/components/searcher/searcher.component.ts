import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataFormFilter } from 'src/app/interfaces/data-form.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent {
  formData!: DataFormFilter;
  selectedOption: string = 'avion';

  dataService = inject(DataService);
  router = inject(Router);

  viewData(data: DataFormFilter) {
    this.formData = data;
    this.formData.type = this.selectedOption;

    this.dataService.setFormData(this.formData);

    if (this.router.routerState.snapshot.url !== '/viajes') {
      this.router.navigateByUrl('/viajes');
    }
  }
}
