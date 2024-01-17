import {Injectable} from '@angular/core';
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
    return this.http.get<Member[]>(this.baseUrl + 'users' );
     // .pipe(map((event: HttpEvent<Member[]> )=>{
        /*if(event instanceof  HttpResponse){
          console.log('Members 222', event.body)
          return event.body;
        }*/
      //  let auxMembers  = event as object;
     //   return auxMembers as Array<Member>;
    //  }))
  }

  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member){
    return this.http.put(this.baseUrl + 'users', member);
  }

}
