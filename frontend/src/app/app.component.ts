import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({selector: 'app-root', imports: [RouterOutlet, RouterLinkWithHref], templateUrl: './app.component.html', styleUrl: './app.component.css'})
export class AppComponent {
    title: string = "Job Application";
    constructor(private auth: AuthService) {}
    onSubmit() {
        this.auth.logout();
    }
}