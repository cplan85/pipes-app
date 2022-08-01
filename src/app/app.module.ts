import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PrimeNgModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
