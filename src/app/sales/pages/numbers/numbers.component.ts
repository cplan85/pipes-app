import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent {
  netSales: number = 2849090.83893;
  percentage: number = 0.4856;
  constructor() {}
}
