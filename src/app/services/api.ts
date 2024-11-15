import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private apiUrl = `${environment.backendUrl}/api`;

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, postData);
  }

  getPostsByCategory(categoryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${categoryId}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }
}
