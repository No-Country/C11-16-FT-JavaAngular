import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataFormFilter } from 'src/app/interfaces/data-form.interface';
import { DataService } from 'src/app/services/data.service';

interface NavItem {
  name: string;
  link: string;
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

  isLoged: boolean = false;

  userData!: User;

  formBuilder = inject(FormBuilder);
  dataService = inject(DataService);
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    this.searchForm = this.initSearchForm();

    this.isAuthLoged();
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
  }

  SearchFormTravel() {
    if (this.searchForm.invalid) return;

    window.scroll(0, 1009);

    this.dataService.setFormData(this.searchForm.value);

    if (this.router.routerState.snapshot.url !== '/viajes') {
      this.router.navigateByUrl('/viajes');
    }

    this.searchForm.reset();
  }

  isAuthLoged() {
    this.authService.getMyBoolean().subscribe((resp) => {
      this.userData = JSON.parse(localStorage.getItem('userData')!);
      this.isLoged = resp;

      this.showAuthHeader = false;
    });
  }

  showMenu() {
    this.showAuth();
  }
}
