import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApplicationsService } from '../services/applications.service';
@Component({selector: 'app-application-details', imports: [CommonModule, RouterLink, NgIf], templateUrl: './application-details.component.html', styleUrl: './application-details.component.css'})
export class ApplicationDetailsComponent implements OnInit {
    application: any = null;
    error: string = "";
    constructor(private applicationsService: ApplicationsService, private route: ActivatedRoute, private router: Router) {}
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.applicationsService.getOne(id).subscribe({next: (data) => this.application = data, error: () => this.error = "Failed to load application"});
    }
    delete() {
        if (!confirm("Delete this application?")) {
            return;
        }
        this.applicationsService.delete(this.application.id).subscribe({next: () => this.router.navigate(['/applications']), error: () => this.error = "Failed to delete application."});
    }
}