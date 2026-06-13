import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({providedIn: 'root'})
export class AuthService {
    private url: string = "http://localhost:3000/auth";
    private loggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem("token"));
    isLoggedIn$ = this.loggedIn$.asObservable();
    private currentUser$ = new BehaviorSubject<any>(null);
    user$ = this.currentUser$.asObservable();
    constructor(private http: HttpClient) {}
    login(email: string, password: string) {
        return this.http.post<{ access_token: string, user: any }>(`${this.url}/login`, {email, password});
    }
    register(name: string, username: string, email: string, password: string) {
        return this.http.post<{ access_token: string, user: any }>(`${this.url}/register`, {name, username, email, password});
    }
    getMe() {
        return this.http.get<any>(`${this.url}/me`, this.authHeaders());
    }
    saveToken(token: string, user: any) {
        localStorage.setItem('token', token);
        this.currentUser$.next(user);
        this.loggedIn$.next(true);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    logout() {
        localStorage.removeItem('token');
        this.currentUser$.next(null);
        this.loggedIn$.next(false);
    }
    isLoggedIn() {
        return !!this.getToken();
    }
    authHeaders() {
        return {headers: {Authorization: `Bearer ${this.getToken()}`}};
    }
    fetchandSetUser() {
        return this.getMe().subscribe(user => this.currentUser$.next(user));
    }
}