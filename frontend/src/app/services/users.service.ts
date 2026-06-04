import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable({providedIn: 'root'})
export class UsersService {
    private url = "http://localhost:3000/users";
    constructor(private http: HttpClient, private auth: AuthService) {}
    getMe() {
        return this.http.get<any>('http://localhost:3000/auth/me', this.auth.authHeaders());
    }
    update(data: {name?: string; username?: string; email?: string; password?: string}) {
        return this.http.patch<any>(`${this.url}/me`, data, this.auth.authHeaders());
    }
}