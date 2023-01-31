import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    email :"",
    password: ""
  }

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUp(this.user).subscribe({
      next: res =>{
        console.log(res);
        localStorage.setItem("token",res.token) //guarda el token en el local storage
        this.router.navigate(["/private"]) // para redireccionar a la vista private
      },
      error: err =>{
        console.log(err);
      }
    })
  }

}
