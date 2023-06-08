import { Pipe, PipeTransform } from '@angular/core';
import { TripModifie } from '../interfaces/trip_interface';

@Pipe({
  name: 'optionFilter',
})
export class OptionFilterPipe implements PipeTransform {
  transform(value: TripModifie, ...args: unknown[]): unknown {
    const { adults, children } = value;
    if (adults === 1 && children === 0) {
      return `${adults} adulto`;
    } else if (adults === 1 && children > 0) {
      return `${adults} adulto y ${children} niño${children > 1 ? 's' : ''}`;
    } else if (adults > 1 && children === 0) {
      return `${adults} adultos`;
    } else {
      return `${adults} adultos y ${children} niño${children > 1 ? 's' : ''}`;
    }
  }
}
