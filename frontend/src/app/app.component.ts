import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
@Component({selector: 'app-root', imports: [RouterOutlet, RouterLinkWithHref, CommonModule, AsyncPipe], templateUrl: './app.component.html', styleUrl: './app.component.css'})
export class AppComponent {
    title: string = "Job Tracker";
    isLoggedIn$;
    user$;
    constructor(private auth: AuthService, private router: Router) {
        this.isLoggedIn$ = this.auth.isLoggedIn$;
        this.user$ = this.auth.user$;
        if (this.auth.isLoggedIn()) {
            this.auth.fetchandSetUser();
        }
    }
    get isLoggedIn(): boolean {
        return this.auth.isLoggedIn();
    }
    onSubmit() {
        this.auth.logout();
        this.router.navigate(['/login']);
    }
}