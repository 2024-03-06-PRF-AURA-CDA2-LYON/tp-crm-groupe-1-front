import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CustomerListComponent} from "./components/customers/customer-list/customer-list.component";

export const routes: Routes = [

  {path: 'customers', component: CustomerListComponent},
];
