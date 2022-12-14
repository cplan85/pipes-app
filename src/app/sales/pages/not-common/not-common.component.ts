import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs';

@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
  styleUrls: ['./not-common.component.scss'],
})
export class NotCommonComponent implements OnInit {
  //i18nSlect
  name: string = 'Carlos';
  gender: string = 'male';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  //i18nPlural

  clients: string[] = ['Maria', 'Jose', 'Jack', 'Pol'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': ' tenemos 1 cliente esperando.',
    other: ' tenemos # clientes esperando.',
  };

  changeClient() {
    if (this.name === 'Carlos') {
      this.name = 'Joanna';
      this.gender = 'female';
    } else {
      this.name = 'Carlos';
      this.gender = 'male';
    }
  }

  deleteClient() {
    return this.clients.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Carlos',
    age: 35,
    address: 'Barcelona, Spain',
  };

  //JsonPipe
  heroes = [
    {
      name: 'Superman',
      flies: true,
    },
    {
      name: 'Robin',
      flies: false,
    },
    {
      name: 'Aquaman',
      flies: false,
    },
  ];

  //Async Pipe
  myObservable = interval(1000); // 0, 1, 2, 3 ,4 ,5 ,6

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have received promise data');
    }, 3500);
  });

  constructor() {
    this.myObservable.subscribe(console.log);
  }

  ngOnInit(): void {}
}
