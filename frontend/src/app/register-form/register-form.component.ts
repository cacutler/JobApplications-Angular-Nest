import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({selector: 'app-register-form', imports: [FormsModule], templateUrl: './register-form.component.html', styleUrl: './register-form.component.css'})
export class RegisterFormComponent {
    name = '';
    username = '';
    email = '';
    password = '';
}