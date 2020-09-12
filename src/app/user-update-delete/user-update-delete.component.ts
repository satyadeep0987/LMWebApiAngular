import { Component, OnInit, NgZone } from '@angular/core';
import { ServiceUserService } from '../service-user.service';
import { UserModel } from '../user-model';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'app-user-update-delete',
  templateUrl: './user-update-delete.component.html',
  styleUrls: ['./user-update-delete.component.css']
})
export class UserUpdateDeleteComponent implements OnInit {

  srv:ServiceUserService;
  result:UserModel;
  user = new UserModel();
  ngZone:NgZone;
  router:Router;
  id:number;

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


  constructor(srv:ServiceUserService,ngZone:NgZone,router:Router) {
    this.srv = srv;
    this.ngZone = ngZone;
    this.router = router;
   }

  ngOnInit(): void {
  }

  selectUserBYId(id:number):void{
    this.id = id;
    this.srv.GetUserModelID(id).subscribe((data:UserModel)=>{
      this.result=data;
    });
  }

  UpdateUser():void{
    this.user.ucontact = this.result.ucontact;
    this.user.uaddress= this.result.uaddress;
    this.user.uname = this.result.uname;
    this.srv.UpdateUsserModel(this.id,this.user).subscribe((data:string)=>{
      alert(data);
    this.ngZone.run(() => this.router.navigateByUrl('/userinfo'));
    });
  }

  RemoveUser():void{
    this.srv.DeleteUserModel(this.id).subscribe((data:any)=>{
      console.log(data);
      if(data == 200)
        {
          alert("Data deleted");
        }
      
      this.ngZone.run(() => this.router.navigateByUrl('/userinfo'));
    });
  }

}
