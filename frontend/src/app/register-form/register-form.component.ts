import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
@Component({selector: 'app-register-form', imports: [FormsModule, RouterLink], templateUrl: './register-form.component.html', styleUrl: './register-form.component.css'})
export class RegisterFormComponent {
    name = '';
    username = '';
    email = '';
    password = '';
}