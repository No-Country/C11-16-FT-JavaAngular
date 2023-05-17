import { NgModule } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  exports: [MultiSelectModule, CalendarModule, DropdownModule],
})
export class PrimeNgModule {}
