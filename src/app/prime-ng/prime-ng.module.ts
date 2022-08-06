import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { Fieldset, FieldsetModule } from 'primeng/fieldset';

@NgModule({
  exports: [ButtonModule, CardModule, FieldsetModule, MenubarModule],
})
export class PrimeNgModule {}
