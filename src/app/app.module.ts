import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NotCommonComponent } from './sales/pages/not-common/not-common.component';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { OrderComponent } from './sales/pages/order/order.component';

@NgModule({
  declarations: [AppComponent, NumbersComponent, NotCommonComponent, BasicsComponent, OrderComponent],
  imports: [BrowserModule, PrimeNgModule, SharedModule, AppRouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
