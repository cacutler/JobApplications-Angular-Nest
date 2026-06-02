import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable({providedIn: 'root'})
export class ApplicationsService {
    private url = "http://localhost:3000/applications";
    constructor(private http: HttpClient, private auth: AuthService) {}
    getAll() {
        return this.http.get<any[]>(this.url, this.auth.authHeaders());
    }
    getOne(id: number) {
        return this.http.get<any>(`${this.url}/${id}`, this.auth.authHeaders());
    }
    create(data: any) {
        return this.http.post<any>(this.url, data, this.auth.authHeaders());
    }
    update(id: number, data: any) {
        return this.http.patch<any>(`${this.url}/${id}`, data, this.auth.authHeaders());
    }
    delete(id: number) {
        return this.http.delete<any>(`${this.url}/${id}`, this.auth.authHeaders());
    }
}