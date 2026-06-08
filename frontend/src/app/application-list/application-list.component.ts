import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApplicationsService } from '../services/applications.service';
import { NgIf } from "@angular/common";
import { FormsModule } from '@angular/forms';
@Component({selector: 'app-application-list', imports: [CommonModule, RouterLink, NgIf, NgFor, FormsModule], templateUrl: './application-list.component.html', styleUrl: './application-list.component.css'})
export class ApplicationListComponent implements OnInit {
    applications: any[] = [];
    filteredApplications: any[] = [];
    searchQuery: string = "";
    error: string = "";
    constructor(private applicationsService: ApplicationsService) {}
    ngOnInit() {
        this.applicationsService.getAll().subscribe({
            next: (data) => {
                this.applications = data;
                this.filteredApplications = data;
            }, 
            error: () => this.error = "Failed to load applications."
        });
    }
    onSearch() {
        const q = this.searchQuery.toLowerCase().trim();
        this.filteredApplications = !q ? this.applications : this.applications.filter(app => app.title?.toLowerCase().includes(q) || app.company?.toLowerCase().includes(q) || app.status?.toLowerCase().includes(q) || app.stage?.toLowerCase().includes(q) || app.notes?.toLowerCase().includes(q));
    }
    delete(id: number) {
        if (!confirm("Delete this application?")) {
            return;
        }
        this.applicationsService.delete(id).subscribe({
            next: () => {
                this.applications = this.applications.filter(a => a.id !== id);
                this.onSearch();
            },
            error: () => this.error = "Failed to delete application."
        });
    }
}