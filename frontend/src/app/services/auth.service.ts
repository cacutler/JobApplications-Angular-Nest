import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class AuthService {
    private url: string = "http://localhost:3000/auth";
    constructor(private http: HttpClient) {}
    login(email: string, password: string) {
        return this.http.post<{ access_token: string }>(`${this.url}/login`, {email, password});
    }
    register(name: string, username: string, email: string, password: string) {
        return this.http.post<{ access_token: string }>(`${this.url}/register`, {name, username, email, password});
    }
    getMe() {
        return this.http.get<any>(`${this.url}/me`, this.authHeaders());
    }
    saveToken(token: string) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    logout() {
        localStorage.removeItem('token');
    }
    isLoggedIn() {
        return !!this.getToken();
    }
    authHeaders() {
        return {headers: {Authorization: `Bearer ${this.getToken()}`}};
    }
}