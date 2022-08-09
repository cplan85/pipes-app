import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(heroes: Heroe[], orderBy: string = 'without value'): Heroe[] {
    switch (orderBy) {
      case 'name':
        return (heroes = heroes.sort((a, b) => (a.name > b.name ? 1 : -1)));
      case 'flies':
        return (heroes = heroes.sort((a, b) => (a.flies > b.flies ? 1 : -1)));
      case 'color':
        return (heroes = heroes.sort((a, b) => (a.color > b.color ? 1 : -1)));
      default:
        return heroes;
    }
  }
}
