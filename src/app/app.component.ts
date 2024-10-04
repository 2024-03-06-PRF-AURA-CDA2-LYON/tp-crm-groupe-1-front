import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CustomerFormComponent} from "./components/customers/customer-form/customer-form.component";
import {HeaderComponent} from "./components/shared-components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomerFormComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-crm-groupe-1-front';
}
