import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { BookModel } from './book-model'
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookService {

  book:BookModel;
  http:HttpClient;
  private url = 'http://localhost:65457/api/book';

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  constructor(http : HttpClient) {
    this.http = http;
  }

  GetBookModel():Observable<BookModel[]>{
    return this.http.get<BookModel[]>(this.url);
  }

  GetBookModelById(id:number):Observable<BookModel>{
    return this.http.get<BookModel>(this.url+'/'+id);
  }

  InsertBookModel(b:BookModel):Observable<string>{
    return this.http.post<string>(this.url,b,this.httpOptions);
  }

  UpdateBookModel(id:number,b:BookModel):Observable<string>{
    return this.http.put<string>(this.url+'/'+id,b,this.httpOptions);
  }

  DeleteBookModel(id:number):Observable<any>{
    return this.http.delete<any>(this.url+'/'+id);
  }
}
