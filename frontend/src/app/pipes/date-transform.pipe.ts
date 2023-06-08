import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform',
})
export class DateTransformPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): Date {
    const dateString = `${value}`;
    const date = new Date(dateString);

    date.setDate(date.getDate() + 9);

    return date;
  }
}
