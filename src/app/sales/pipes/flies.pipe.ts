import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flies',
})
export class FliesPipe implements PipeTransform {
  transform(value: string): string {
    return value ? 'Indeed does fly' : 'Does not fly';
  }
}
