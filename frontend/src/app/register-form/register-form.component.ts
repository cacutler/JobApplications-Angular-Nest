import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../services/auth.service';
@Component({selector: 'app-register-form', imports: [FormsModule, RouterLink], templateUrl: './register-form.component.html', styleUrl: './register-form.component.css'})
export class RegisterFormComponent {
    name = "";
    username = "";
    email = "";
    password = "";
    error = "";
    constructor(private auth: AuthService, private router: Router) {}
    onSubmit() {
        this.error = "";
        this.auth.register(this.name, this.username, this.email, this.password).subscribe({
            next: (res) => {
                this.auth.saveToken(res.access_token);
                this.router.navigate(["/applications"]);
            },
            error: (err) => {
                this.error = err.status === 409 ? "Email alread in use." : "Registration failed.";
            }
        });
    }
}