import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApplicationsService } from '../services/applications.service';
import { NgIf } from "@angular/common";
@Component({selector: 'app-create-form', imports: [FormsModule, RouterLink, NgIf], templateUrl: './create-form.component.html', styleUrl: './create-form.component.css'})
export class CreateFormComponent {
    title = "";
    company = "";
    description = "";
    qualifications = "";
    status = "APPLIED";
    stage = "";
    url = "";
    submission = "";
    notes = "";
    error = "";
    constructor(private applicationService: ApplicationsService, private router: Router) {}
    onSubmit() {
        this.error = "";
        const payload: any = {title: this.title, company: this.company, status: this.status};
        if (this.description) {
            payload.description = this.description;
        }
        if (this.qualifications) {
            payload.qualifications = this.qualifications;
        }
        if (this.stage) {
            payload.stage = this.stage;
        }
        if (this.url) {
            payload.url = this.url;
        }
        if (this.submission) {
            payload.submission = this.submission;
        }
        if (this.notes) {
            payload.notes = this.notes;
        }
        this.applicationService.create(payload).subscribe({
            next: (res) => this.router.navigate(["/applications", res.id]),
            error: () => this.error = "Failed to create application."
        });
    }
}