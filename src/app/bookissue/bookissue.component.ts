import { Component, OnInit } from '@angular/core';
import { ServiceIssueService } from '../service-issue.service';
import { IssueModel } from '../issue-model';
import { CustomIssue } from '../custom-issue';

@Component({
  selector: 'app-bookissue',
  templateUrl: './bookissue.component.html',
  styleUrls: ['./bookissue.component.css']
})
export class BookissueComponent implements OnInit {

  srv:ServiceIssueService;
  result:CustomIssue[];
  isu:IssueModel;

  constructor(srv:ServiceIssueService) {
    this.srv = srv;
   }

  ngOnInit(): void {
    this.ShowIssuedBook();
  }

  ShowIssuedBook():void{
    this.srv.GetIssuedBook().subscribe((data:CustomIssue[])=>{
      this.result = data;
    });
  }
}
