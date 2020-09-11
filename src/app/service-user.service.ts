import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { UserModel } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {
  user : UserModel;
	http: HttpClient;
	private url:string = 'http://localhost:65457/api/user';
	httpOptions = {headers: new HttpHeaders({
			'Content-Type' : 'application/json'
	})
	}

  constructor(http:HttpClient) {
    this.http = http;
   }

  GetUser():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.url);
  }

  GetUserID(id:number):Observable<UserModel>{
    return this.http.get<UserModel>(this.url+'/'+id);
  }

  InsertUser(u:UserModel):Observable<string>{
    return this.http.post<string>(this.url,u,this.httpOptions);
  }

  UpdateUsser(id:number,u:UserModel):Observable<string>{
    return this.http.put<string>(this.url+'/'+id,u,this.httpOptions);
  }

  DeleteUser(id:number):Observable<any>{
    return this.http.delete<any>(this.url+'/'+id);
  }

}
