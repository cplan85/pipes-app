import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapatalizePipe implements PipeTransform {
  transform(value: string, inCapitals: boolean = true): string {
    return inCapitals ? value.toUpperCase() : value.toLowerCase();
  }
}
