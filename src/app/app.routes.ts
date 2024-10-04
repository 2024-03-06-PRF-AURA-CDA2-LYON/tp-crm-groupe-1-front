import { Routes } from '@angular/router';
import {CustomerListComponent} from "./components/customers/customer-list/customer-list.component";
import {CustomerFormComponent} from "./components/customers/customer-form/customer-form.component";
import {OrdersListComponent} from "./components/orders/orders-list/orders-list.component";
import {OrdersFormComponent} from "./components/orders/orders-form/orders-form.component";

export const routes: Routes = [
  {path:  '', component:  OrdersListComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/form', component: CustomerFormComponent},
  {path: 'orders/form', component: OrdersFormComponent}
];
