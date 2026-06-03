import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";
@Component({selector: 'app-login-form', imports: [FormsModule, RouterLink, NgIf], templateUrl: './login-form.component.html', styleUrl: './login-form.component.css'})
export class LoginFormComponent {
    email = "";
    password = "";
    error = "";
    constructor(private auth: AuthService, private router: Router) {}
    onSubmit() {
        this.error = "";
        this.auth.login(this.email, this.password).subscribe({
            next: (res) => {
                this.auth.saveToken(res.access_token);
                this.router.navigate(['/applications']);
            },
            error: () => this.error = "Invalid email or password."
        });
    }
}