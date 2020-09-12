import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';
import { ServiceUserService } from '../service-user.service';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  srv:ServiceUserService;
   result:UserModel[];

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

  constructor(srv:ServiceUserService) {
    this.srv = srv;
   }

  ngOnInit(): void {
    this.ShowallUser();
  }

  ShowallUser():void{
    this.srv.GetUserModel().subscribe((data:UserModel[])=>{
      this.result = data;
    })
  }
}
