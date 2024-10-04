import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CustomerType} from "../../../models/Customer.type";
import {CustomerService} from "../../../services/customer.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit {
  private customersSubject = new BehaviorSubject<CustomerType[]>([]);

  constructor(private customerService: CustomerService) {}

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('ACTIVE', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    order: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    const formData = this.form.value;
    console.log(formData);
    if (this.form.valid) {
      this.customerService.createCustomer(formData).subscribe({
        next: (customer: CustomerType) => {
          console.log("Customer créé avec succès", customer);
          const currentCustomers = this.customersSubject.value;
          this.customersSubject.next([...currentCustomers, customer]);
          this.form.reset();
        },
        error: (error) => {
          console.log("Erreur lors de la création du client", error);
        }
      });
    } else {
      console.log("Formulaire invalide !")
    }
  }
}
