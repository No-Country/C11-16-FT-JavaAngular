import { Component } from '@angular/core';

interface Popular {
  id: number;
  title: string;
  img: string;
}

@Component({
  selector: 'app-summary-purchase',
  templateUrl: './summary-purchase.component.html',
  styleUrls: ['./summary-purchase.component.css'],
})
export class SummaryPurchaseComponent {
  popularArray: Popular[] = [
    {
      id: 6,
      title: 'Descubrí Bariloche en cualquier época del año.',
      img: '../../../../../../assets/images/montaña-min.png',
    },
    {
      id: 5,
      title: 'Enamorate de las maravillosas Cataratas.',
      img: '../../../../../../assets/images/cataratas-min.png',
    },
    {
      id: 4,
      title: 'Conectate con nuestra Coordillera.',
      img: '../../../../../../assets/images/montaña-min-dos.png',
    },
  ];
}
