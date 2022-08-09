import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  isCapitalized: boolean = true;
  items: any;
  orderBy: string;
  constructor() {}

  heroes: Heroe[] = [
    { name: 'Superman', flies: true, color: Color.blue },
    { name: 'Batman', flies: false, color: Color.black },
    { name: 'Robin', flies: false, color: Color.green },
    { name: 'Daredevil', flies: false, color: Color.red },
    { name: 'Green Lantern', flies: true, color: Color.green },
  ];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload',
      },
    ];
  }

  toggleCapitalized() {
    this.isCapitalized = !this.isCapitalized;
  }

  changeOrder(value: string) {
    this.orderBy = value;
  }
}
