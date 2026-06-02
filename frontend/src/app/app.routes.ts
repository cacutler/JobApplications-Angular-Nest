import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { authGuard } from './guards/auth.guard';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { UpdateUserFormComponent } from './update-user-form/update-user-form.component';
export const routes: Routes = [
    {path: 'login', component: LoginFormComponent},
    {path: 'register', component: RegisterFormComponent},
    {path: 'applications', component: ApplicationListComponent, canActivate: [authGuard]},
    {path: 'applications/new', component: CreateFormComponent, canActivate: [authGuard]},
    {path: 'applications/:id', component: ApplicationDetailsComponent, canActivate: [authGuard]},
    {path: 'applications/:id/edit', component: EditFormComponent, canActivate: [authGuard]},
    {path: 'profile/edit', component: UpdateUserFormComponent, canActivate: [authGuard]},
    {path: '', redirectTo: '/applications', pathMatch: 'full'}
];