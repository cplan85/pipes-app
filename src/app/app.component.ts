import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Carlos';
  value: number = 230023;
  obj = {
    name: 'Carlos',
  };
  showName() {
    console.log(this.name);
  }
  title = 'pipesApp';
}
