import { Component } from '@angular/core';

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
  navItem: NavItem[] = [
    {
      name: 'categorías',
      link: '/categorias',
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
}
