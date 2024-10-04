import {Component, OnInit} from '@angular/core';
import { BehaviorSubject, type Observable } from 'rxjs';
import {CustomerService} from "../../../services/customer.service";
import {CustomerType} from "../../../models/Customer.type";
import {AsyncPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {

  private customersSubject = new BehaviorSubject<CustomerType[]>([]);
  customers$ = this.customersSubject.asObservable();

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customersSubject.next(customers);
    });
  }

}
