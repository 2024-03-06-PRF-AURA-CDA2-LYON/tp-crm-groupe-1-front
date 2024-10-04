import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CustomerListComponent} from "./components/customers/customer-list/customer-list.component";
import {CustomerFormComponent} from "./components/customers/customer-form/customer-form.component";

export const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/form', component: CustomerFormComponent},
];
