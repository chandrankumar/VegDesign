import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface JWTResponse{
  jwttoken: string
  message: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userDisplayName: string;
  errorMsg: string;
  submitted: boolean = false;
  isError: boolean;

  constructor(private authService:AuthenticationService, private router:Router, public fb: FormBuilder) {
    
   }

  ngOnInit(): void {
  }

  loginForm = this.fb.group(
    {
      username : ['', Validators.required],
      password : ['', Validators.required]
    }
  );

  login(loginForm: NgForm): void { 

    if(loginForm.valid){
     this.submitted = true;
     console.log("User ",loginForm.value);
    let username = loginForm.value.username;
    console.log("username ", username);
    this.authService.login(loginForm.value).subscribe((response) =>
    {
        let obj: JWTResponse = JSON.parse(JSON.stringify(response));
        console.log("Token ",obj.jwttoken);
        if(obj.jwttoken !== null){
          sessionStorage.setItem('loggedUser', username);
          this.router.navigateByUrl('').then( e=>{
              console.log("navigate to dashboard after successfull login");
              window.location.reload();
          });
        }else{
          this.isError = true;
          this.errorMsg = 'Invalid username/password';
          console.log("empty token ",this.errorMsg);
        }
    }
    ,(error) => {
      console.log(error);
    }
    );
  }else{
    this.isError = true;
    this.errorMsg = 'Invalid username/password';
    console.log('not valid form...');
  }
    }

    navigateToRegister(): void{
      this.router.navigateByUrl('register');
    }
    
}
