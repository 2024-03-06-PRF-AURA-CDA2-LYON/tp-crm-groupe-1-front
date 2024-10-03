import { Routes } from '@angular/router';
import {OrdersListComponent} from "./components/orders/orders-list/orders-list.component";

export const routes: Routes = [
  {
    path: 'orders', component: OrdersListComponent
  }
];
