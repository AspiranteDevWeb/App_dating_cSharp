import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Member} from "../_models/member";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'users' , this.getHttpOptions())
      .pipe(map((event: HttpEvent<Member[]> )=>{
        if(event instanceof  HttpResponse){
          return event.body;
        } return [];
      }))
  }

  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + 'users/' + username, this.getHttpOptions())
  }
  getHttpOptions() : any {
    const userString = localStorage.getItem('user');
    if(!userString)
      return {};
    const user= JSON.parse(userString);
    return {
      header: new HttpHeaders({
        Authorization: 'Bearer' + user.token
      })
    };
  }
}
