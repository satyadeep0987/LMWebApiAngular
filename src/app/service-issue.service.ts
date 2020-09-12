import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { IssueModel } from './issue-model';
import { CustomIssue } from './custom-issue';


@Injectable({
  providedIn: 'root'
})
export class ServiceIssueService {

  i:IssueModel;
  ci:CustomIssue;
  http:HttpClient;
  private url = 'http://localhost:65457/api/issue';

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  constructor(http : HttpClient) {
    this.http = http;
  }

  GetIssuedBook():Observable<CustomIssue[]>{
    return this.http.get<CustomIssue[]>(this.url);
  }

  GetIssuedBookByID(id:number):Observable<CustomIssue>{
    return this.http.get<CustomIssue>(this.url+'/'+id);
  }

  IssueBook(i:IssueModel):Observable<string>{
    return this.http.post<string>(this.url,i,this.httpOptions);
  }

  Returnbook(id:number,i:IssueModel):Observable<string>{
    return this.http.put<string>(this.url+'/'+id,i,this.httpOptions);
  }

}
