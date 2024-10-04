import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {OrderType} from "../../../models/Order.type";
import {OrderService} from "../../../services/order.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent implements OnInit {
  orders: OrderType[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit():void {
    this.loadOrders();
  }

  loadOrders():void {
    this.orderService.getAllOrders().subscribe(
      (data: OrderType[]) => {
        this.orders = data;
      },
      (error) =>{
        console.log("Erreur lors du chargement des prestations",error);
      }
    );
  }
}
