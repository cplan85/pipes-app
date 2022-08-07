import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NotCommonComponent } from './sales/pages/not-common/not-common.component';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { OrderComponent } from './sales/pages/order/order.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CapatalizePipe } from './sales/pipes/capitalize.pipe';

//change the location of the app
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
// you need to include this in order to include other languages.
registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    NotCommonComponent,
    BasicsComponent,
    OrderComponent,
    CapatalizePipe,
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
