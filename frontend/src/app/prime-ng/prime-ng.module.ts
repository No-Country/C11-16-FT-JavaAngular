import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { RatingModule } from 'primeng/rating';

@NgModule({
  exports: [CalendarModule, RatingModule],
})
export class PrimeNgModule {}
