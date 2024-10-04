import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {OrderService} from "../../../services/order.service";
import {OrderType} from "../../../models/Order.type";

@Component({
  selector: 'app-orders-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './orders-form.component.html',
  styleUrl: './orders-form.component.css'
})
export class OrdersFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService
  ){}

  ngOnInit():void {
    this.form = this.formBuilder.group({
      serviceType: ['', Validators.required],
      nbDays: ['', Validators.required],
      tva: ['', [Validators.required, Validators.min(0)]],
      totalExcludeTax: ['', Validators.required],
      state: ['OPTION', Validators.required],
      comment: ['', Validators.required],
      customer: [''],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const order: OrderType = {
        ...this.form.value,
        customer: this.form.value.customer ? {name: this.form.value.customer } :undefined
      };

      this.orderService.createOrder(order).subscribe(
        response =>{
          console.log("Commande créée avec succès :" , response);
          this.form.reset();
        },
        (error) =>{
          console.log("Erreur lors de la création de la commande :",error);
        }
      )
    } else {
      console.log("Formulaire Invalide ! ");
    }
  }
}
