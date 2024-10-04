import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CustomerFormComponent} from "./components/customers/customer-form/customer-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-crm-groupe-1-front';
}
