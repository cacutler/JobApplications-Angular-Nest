import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable({providedIn: 'root'})
export class ApplicationsService {
    private url = "http://localhost:3000/applications";
    constructor(private http: HttpClient, private auth: AuthService) {}
    private headers() {
        return {headers: {Authorization: `Bearer ${this.auth.getToken()}`}};
    }
    getAll() {
        return this.http.get<any[]>(this.url, this.headers());
    }
    getOne(id: number) {
        return this.http.get<any>(`${this.url}/${id}`, this.headers());
    }
    create(data: any) {
        return this.http.post<any>(this.url, data, this.headers());
    }
    update(id: number, data: any) {
        return this.http.patch<any>(`${this.url}/${id}`, data, this.headers());
    }
    delete(id: number) {
        return this.http.delete<any>(`${this.url}/${id}`, this.headers());
    }
}