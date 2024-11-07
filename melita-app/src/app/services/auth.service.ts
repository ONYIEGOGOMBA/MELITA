import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:9999';  // The mock API server URL

  constructor(private http: HttpClient) {}

  // Login function to get the auth token
  login(username: string, password: string): Observable<string | null> {
    const loginPayload = { username, password };
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, loginPayload).pipe(
      map(response => response.token),
      catchError(error => {
        console.error('Login failed', error);
        return of(null);
      })
    );
  }

  // Store the auth token in localStorage
  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Retrieve the auth token from localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Remove the auth token from localStorage (log out)
  logout(): Observable<void> {
    return this.http.get<void>(`${this.apiUrl}/logout`).pipe(
      catchError(error => {
        console.error('Logout failed', error);
        return of(void 0);
      })
    );
  }

  // Check if the user is authenticated (i.e., token exists)
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
