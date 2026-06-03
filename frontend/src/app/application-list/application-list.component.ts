import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApplicationsService } from '../services/applications.service';
import { NgIf } from "@angular/common";
@Component({selector: 'app-application-list', imports: [CommonModule, RouterLink, NgIf, NgFor], templateUrl: './application-list.component.html', styleUrl: './application-list.component.css'})
export class ApplicationListComponent implements OnInit {
    applications: any[] = [];
    error = "";
    constructor(private applicationsService: ApplicationsService) {}
    ngOnInit() {
        this.applicationsService.getAll().subscribe({
            next: (data) => this.applications = data,
            error: () => this.error = "Failed to load applications."
        });
    }
    delete(id: number) {
        if (!confirm("Delete this application?")) {
            return;
        }
        this.applicationsService.delete(id).subscribe({
            next: () => this.applications = this.applications.filter(a => a.id !== id),
            error: () => this.error = "Failed to delete application."
        });
    }
}