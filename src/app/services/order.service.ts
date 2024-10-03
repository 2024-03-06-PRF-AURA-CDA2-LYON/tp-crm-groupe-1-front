import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { OrderType } from '../models/Order.type'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<OrderType[]> {
    return this.http.get<OrderType[]>(`${this.apiUrl}`);
  }

  getOrderById(id: number): Observable<OrderType> {
    return this.http.get<OrderType>(`${this.apiUrl}/${id}`);
  }

  createOrder(order: OrderType): Observable<OrderType> {
    return this.http.post<OrderType>(`${this.apiUrl}/create`, order);
  }

  updateOrder(id: number, order: OrderType): Observable<OrderType> {
    return this.http.put<OrderType>(`${this.apiUrl}/${id}`, order);
  }

  deleteOrder(id: number): Observable<OrderType> {
    return this.http.delete<OrderType>(`${this.apiUrl}/${id}`);
  }
}
