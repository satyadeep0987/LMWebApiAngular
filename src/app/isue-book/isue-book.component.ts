import { Component, OnInit, NgZone } from '@angular/core';
import { IssueModel } from '../issue-model';
import { ServiceIssueService } from '../service-issue.service';

import {  Router } from '@angular/router';


@Component({
  selector: 'app-isue-book',
  templateUrl: './isue-book.component.html',
  styleUrls: ['./isue-book.component.css']
})
export class IsueBookComponent implements OnInit {

  issue = new IssueModel;
  srv:ServiceIssueService;
  ngZone:NgZone;
  router:Router;

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

  issuebook():void{
    this.srv.IssueBook(this.issue).subscribe((data:string)=>{
      alert(data);
      this.ngZone.run(() => this.router.navigateByUrl('/issueinfo'));
    })
  }

}
