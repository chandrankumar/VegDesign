import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  userDisplayName: string;
  

  isLoogedIn: boolean = false;
  
  isLoogedOut: boolean = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
   
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    if(this.userDisplayName !== 'null'){
      console.log("logged as :",this.userDisplayName);
      this.isLoogedIn = true;
      this.isLoogedOut = false;
      console.log("IF isLoogedIn ",this.isLoogedIn);
      console.log("IF isLoogedOut ",this.isLoogedOut);
    }else{
      this.isLoogedIn = false;
      this.isLoogedOut = true;
      console.log("ELSE isLoogedIn ",this.isLoogedIn);
      console.log("ELSE isLoogedOut ",this.isLoogedOut);
    }
  }

  logout(): void{
    this.isLoogedIn = false;
    this.isLoogedOut = true;
    sessionStorage.setItem('loggedUser', null);
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    console.log('logged out successfully...', this.userDisplayName);
    this.router.navigateByUrl('dashboard');
  }

}
