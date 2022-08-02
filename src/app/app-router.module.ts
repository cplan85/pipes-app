import { OrderComponent } from './sales/pages/order/order.component';
import { NotCommonComponent } from './sales/pages/not-common/not-common.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full',
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'not-common',
    component: NotCommonComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
