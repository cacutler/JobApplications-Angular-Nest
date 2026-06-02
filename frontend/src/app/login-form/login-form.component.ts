import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({selector: 'app-login-form', imports: [FormsModule, RouterLink], templateUrl: './login-form.component.html', styleUrl: './login-form.component.css'})
export class LoginFormComponent {
    email = '';
    password = '';
    constructor(private auth: AuthService, private router: Router) {}
    onSubmit() {
        this.auth.login(this.email, this.password).subscribe({
            next: (res) => {
                this.auth.saveToken(res.access_token);
                this.router.navigate(['/applications']);
            },
            error: () => alert('Invalid credentials')
        });
    }
}