import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  DataFormFilter,
  SearchDestination,
} from 'src/app/interfaces/data-form.interface';
import { DataService } from 'src/app/services/data.service';

interface NavItem {
  name: string;
  link: string;
  // exact: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchForm!: FormGroup;
  showAuthHeader: boolean = false;

  dataFilter!: DataFormFilter;

  formBuilder = inject(FormBuilder);
  dataService = inject(DataService);
  router = inject(Router);

  ngOnInit(): void {
    this.searchForm = this.initSearchForm();
  }

  navItem: NavItem[] = [
    {
      name: 'viajes',
      link: '/viajes',
    },
    {
      name: 'recomendaciones',
      link: '/recomendaciones',
    },
    {
      name: 'sobre nosotros',
      link: '/sobre-nosotros',
    },
    {
      name: 'ayuda',
      link: '/ayuda',
    },
  ];

  initSearchForm(): FormGroup {
    return this.formBuilder.group({
      destination: ['', [Validators.required]],
    });
  }

  showAuth() {
    this.showAuthHeader = !this.showAuthHeader;
    console.log(this.showAuthHeader);
  }

  SearchFormTravel() {
    if (this.searchForm.invalid) return;

    this.dataService.setFormData(this.searchForm.value);

    if (this.router.routerState.snapshot.url !== '/viajes') {
      this.router.navigateByUrl('/viajes');
    }

    console.log(this.searchForm.value);
  }
}
