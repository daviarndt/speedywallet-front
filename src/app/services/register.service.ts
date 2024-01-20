import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  register(
    firstName: string,
    lastName: string,
    email: string,
    document: string,
    password: string,
    userType: string
    ): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, { 
      firstName,
      lastName,
      email,
      document,
      password,
      userType
    });
  }
}
