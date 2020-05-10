import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  constructor(private http:HttpClient) { }

  private _loginUrl = "authenticate/login";
  private _registerUrl = "authenticate/register";

  login(user: any) {
    
    return this.http.post<any>(this._loginUrl, user);
    
  }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }
  

}
