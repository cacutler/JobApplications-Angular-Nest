import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpdateUserFormComponent } from './update-user-form/update-user-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { ApplicationListComponent } from './application-list/application-list.component';
@Component({selector: 'app-root', imports: [RouterOutlet, UpdateUserFormComponent, RegisterFormComponent, LoginFormComponent, EditFormComponent, CreateFormComponent, ApplicationDetailsComponent, ApplicationListComponent], templateUrl: './app.component.html', styleUrl: './app.component.css'})
export class AppComponent {
    title: string = 'Job Application';
    authenticated: boolean = false;
}