import { Component, OnInit } from '@angular/core';

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

  clients: string[] = ['Maria', 'Jose', 'Jose'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': ' tenemos 1 cliente esperando.',
    other: ' tenemos # clientes esperando.',
  };

  constructor() {}

  ngOnInit(): void {}
}
