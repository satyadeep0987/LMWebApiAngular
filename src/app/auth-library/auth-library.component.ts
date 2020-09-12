import { Component, OnInit, NgZone } from '@angular/core';
import { Auth, Admin,User } from '../auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-library',
  templateUrl: './auth-library.component.html',
  styleUrls: ['./auth-library.component.css']
})
export class AuthLibraryComponent implements OnInit {

  auth = new Admin();

  checkAuth= new Admin();

  ngZone:NgZone;
  router:Router;
  
  

  constructor(ng:NgZone,ro:Router) {
    this.ngZone = ng;
    this.router = ro; 
    
  }

  ngOnInit(): void {
    this.checkAuth.username = "admin";
    this.checkAuth.password = "admin";
  }

  CheckAuth(){
    if(this.auth.username== this.checkAuth.username && this.auth.password == this.checkAuth.password)
    {
      alert('Login Sucessfull');
      this.ngZone.run(()=>this.router.navigateByUrl('/issueinfo'));
    }
    else{
      alert('login Failed');
      this.ngZone.run(()=>this.router.navigateByUrl('/Auth'));
    }
  }

}
