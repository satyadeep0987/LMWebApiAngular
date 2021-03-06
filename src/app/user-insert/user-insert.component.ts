import { Component, OnInit, NgZone } from '@angular/core';
import { UserModel } from '../user-model';
import {FormsModule , NgForm, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent implements OnInit {

  user = new UserModel();
  srv : ServiceUserService;
  ngZone:NgZone;
  router:Router;
  str:string;

  navbarOpen = false;
	public clicked = false;
	_el: any;
	toggleNavbar() {
		this.navbarOpen = !this.navbarOpen;
	}

	ngAfterViewInit(): void {
		throw new Error("Method not implemented.");
	}

	onClick(event): void {
		event.preventDefault();
		event.stopPropagation();
		this.clicked = true;
	}

  constructor(srv : ServiceUserService,ngZone:NgZone,router:Router) { 
    this.srv = srv;
    this.ngZone = ngZone;
    this.router = router;
  }

  ngOnInit(): void {

  }

  InsertUser():void{
    this.srv.InsertUserModel(this.user).subscribe((data:string)=>{
      this.str=data;
      alert(this.str);
      this.ngZone.run(() => this.router.navigateByUrl('/userinfo'));
    });
  }

}
