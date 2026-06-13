import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../services/auth.service';
import {NgIf} from "@angular/common";
@Component({selector: 'app-register-form', imports: [FormsModule, RouterLink, NgIf], templateUrl: './register-form.component.html', styleUrl: './register-form.component.css'})
export class RegisterFormComponent {
    name: string = "";
    username: string = "";
    email: string = "";
    password: string = "";
    error: string = "";
    constructor(private auth: AuthService, private router: Router) {}
    onSubmit() {
        this.error = "";
        this.auth.register(this.name, this.username, this.email, this.password).subscribe({
            next: (res) => {
                this.auth.saveToken(res.access_token, res.user);
                this.router.navigate(["/applications"]);
            },
            error: (err) => {
                this.error = err.status === 409 ? "Email already in use." : "Registration failed.";
            }
        });
    }
}