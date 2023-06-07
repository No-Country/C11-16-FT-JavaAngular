import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SliderModule } from 'primeng/slider';

@NgModule({
  exports: [
    CalendarModule,
    RatingModule,
    DialogModule,
    ButtonModule,
    SidebarModule,
    SliderModule,
  ],
})
export class PrimeNgModule {}
