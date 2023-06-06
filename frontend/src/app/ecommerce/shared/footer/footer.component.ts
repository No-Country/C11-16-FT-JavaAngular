import { Component, HostListener, inject } from '@angular/core';

interface RedesSociales {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  date = new Date().getFullYear();

  redes: RedesSociales[] = [
    {
      name: 'Facebook',
      icon: 'pi pi-facebook',
    },
    {
      name: 'Instagram',
      icon: 'pi pi-instagram',
    },
    {
      name: 'Linkedin',
      icon: 'pi pi-linkedin',
    },
    {
      name: 'Twitter',
      icon: 'pi pi-twitter',
    },
  ];

  clickToTop() {
    window.scroll(0, 0);
  }
}
