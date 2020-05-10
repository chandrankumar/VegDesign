import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  registration(form: NgForm):void {

    console.log(form.value);
    this.authService.registerUser(form.value).subscribe((response) =>
    {
        let res = JSON.stringify(response);
          console.log(res)
    }
    ,(error) => {
      console.log(error);
    }
    );
  }

}
