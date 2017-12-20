import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let hours = (value -  value % 60) / 60;
    let min = value % 60;

    return hours > 0 ? `${hours}h ${min}min` : `${min}min`
  }
}
