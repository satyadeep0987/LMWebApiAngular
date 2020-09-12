import { Component, OnInit, NgZone } from '@angular/core';
import { IssueModel } from '../issue-model';
import { ServiceIssueService } from '../service-issue.service';
import {  Router } from '@angular/router';
import { CustomIssue } from '../custom-issue';


@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {

  issue= new IssueModel;
  cissue:CustomIssue;

  srv:ServiceIssueService;
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


  constructor(srv:ServiceIssueService,ngZone:NgZone,router:Router) {
    this.srv=srv;
    this.ngZone=ngZone;
    this.router=router;
   }

  ngOnInit(): void {
  }

  GetIssuedBookById(id:number):void{
    this.id=id;
    this.srv.GetIssuedBookByID(this.id).subscribe((data:CustomIssue)=>{
      this.cissue = data;
    });
  }

  Returnbook():void{
    
    this.issue.actualreturndate = this.cissue.actualreturndate;
    this.srv.Returnbook(this.id,this.issue).subscribe((data:string)=>{
      alert(data);
      this.ngZone.run(() => this.router.navigateByUrl('/issueinfo'));
    });
  }

}
