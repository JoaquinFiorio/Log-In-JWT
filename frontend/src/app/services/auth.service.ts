import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://localhost:5000/api"

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user:object){
    return this.http.post<any>(this.URL + "/signup", user)
  }

  signIn(user : object){
    return this.http.post<any>(this.URL + "/signin", user)
  }

  loggedIn(){
    return !!localStorage.getItem("token")//para ver si hay token
  }

  getToken(){
    return localStorage.getItem("token")
  }

  logOut(){
    localStorage.removeItem("token");
    this.router.navigate(['/signin']);
  }
}
