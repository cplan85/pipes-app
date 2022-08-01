import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //constructor(private primengConfig: PrimeNGConfig) {}
  name: string = 'Carlos';
  value: number = 230023;
  obj = {
    name: 'CaRLos',
  };
  showName() {
    console.log(this.name);
  }

  // ngOnInit() {
  //   this.primengConfig.ripple = true;
  // }
  title = 'pipesApp';
}
