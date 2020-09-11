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
  result:UserModel;
  constructor() {
   
   }

  ngOnInit(): void {
 
  }

  

}
