import { Routes } from '@angular/router';
import {OrdersListComponent} from "./components/orders/orders-list/orders-list.component";
import {OrdersFormComponent} from "./components/orders/orders-form/orders-form.component";

export const routes: Routes = [
  {
    path: 'orders', component: OrdersListComponent
  },
  {
    path: 'orders/form', component: OrdersFormComponent
  }
];
