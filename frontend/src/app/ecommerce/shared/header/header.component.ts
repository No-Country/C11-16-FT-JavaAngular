import { Component, inject } from '@angular/core';
import { AuthButtonService } from 'src/app/services/auth-button.service';

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
export class HeaderComponent {
  showAuthHeader: boolean = false;

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

  showAuth() {
    this.showAuthHeader = !this.showAuthHeader;
    console.log(this.showAuthHeader);
  }
}
