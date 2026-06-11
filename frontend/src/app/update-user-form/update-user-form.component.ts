import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { RouterLink } from "@angular/router";
@Component({selector: 'app-update-user-form', imports: [FormsModule, CommonModule, NgIf, RouterLink], templateUrl: './update-user-form.component.html', styleUrl: './update-user-form.component.css'})
export class UpdateUserFormComponent implements OnInit {
    name: string = "";
    username: string = "";
    email: string = "";
    password: string = "";
    error: string = "";
    success: string = "";
    constructor(private usersService: UsersService) {}
    ngOnInit() {
        this.usersService.getMe().subscribe({
            next: (user) => {
                this.name = user.name;
                this.username = user.username;
                this.email = user.email;
            },
            error: () => this.error = "Failed to load profile."
        });
    }
    onSubmit() {
        this.error = "";
        this.success = "";
        const payload: any = {name: this.name, username: this.username, email: this.email};
        if (this.password) {
            payload.password = this.password;
        }
        this.usersService.update(payload).subscribe({next: () => this.success = "Profile updated successfully.", error: () => this.error = "Failed to updated profile."});
    }
}