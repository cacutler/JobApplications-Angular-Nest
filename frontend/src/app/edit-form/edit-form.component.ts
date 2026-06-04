import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApplicationsService } from '../services/applications.service';
import { NgIf } from '@angular/common';
@Component({selector: 'app-edit-form', imports: [FormsModule, RouterLink, NgIf], templateUrl: './edit-form.component.html', styleUrl: './edit-form.component.css'})
export class EditFormComponent implements OnInit {
    id!: number;
    title: string = "";
    company: string = "";
    description: string = "";
    qualifications: string = "";
    status: string = "APPLIED";
    stage: string = "";
    url: string = "";
    submission: string = "";
    error: string = "";
    notes: string = "";
    constructor(private applicationsService: ApplicationsService, private route: ActivatedRoute, private router: Router) {}
    ngOnInit() {
        this.id = Number(this.route.snapshot.paramMap.get("id"));
        this.applicationsService.getOne(this.id).subscribe({
            next: (app) => {
                this.title = app.title;
                this.company = app.company;
                this.description = app.description ?? "";
                this.qualifications = app.qualifications ?? "";
                this.status = app.status;
                this.stage = app.stage ?? "";
                this.url = app.url ?? "";
                this.notes = app.notes ?? "";
                this.submission = app.submission ? app.submission.substring(0, 10) : "";//Format date as YYYY-MM-DD for the date input
            },
            error: () => this.error = "Failed to load application."
        });
    }
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
        this.applicationsService.update(this.id, payload).subscribe({next: () => this.router.navigate(['/applications', this.id]), error: () => this.error = "Failed to update application."});
    }
}