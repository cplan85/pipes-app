import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent implements OnInit {
  lowerName: string = 'carlos';
  upperName: string = 'Carlos';
  completeName: string = 'Carlos Planchart';

  constructor() {}

  ngOnInit(): void {}
}
