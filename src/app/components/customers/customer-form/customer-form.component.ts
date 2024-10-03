import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CustomerType} from "../../../models/Customer.type";
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
  private customersSubject = new BehaviorSubject<CustomerType[]>([]);
  //customers$ = this.customersSubject.asObservable();

  constructor(private customerService: CustomerService) {}

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id);
    const currentCustomers = this.customersSubject.value;
    const updatedCustomers = currentCustomers.filter((customer: CustomerType) => customer.id !== id);
    this.customersSubject.next(updatedCustomers);
  }
}
