import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../models/Customer.type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl="http://localhost:8080/api/customers";

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.apiUrl);
  }

  getCustomerById(id: number): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(`${this.apiUrl}/${id}`);
  }

  createCustomer(customer: CustomerType): Observable<CustomerType> {
    return this.http.post<CustomerType>(`${this.apiUrl}/create`, customer);
  }

  updateCustomer(id: number, customer: CustomerType): Observable<CustomerType> {
    return this.http.put<CustomerType>(`${this.apiUrl}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<CustomerType> {
    return this.http.delete<CustomerType>(`${this.apiUrl}/${id}`);
  }

}
