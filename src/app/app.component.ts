import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccountService} from "./_service/account.service";
import {User} from "./_models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 // title = 'testeDating01';
  users:any;
  constructor(private http:HttpClient, private accountService: AccountService) {
  }

  ngOnInit(): void {//5194
    this.getUsers();
    this.setCurrentUser();
  }

  getUsers(){
    this.http.get('http://localhost:5017/api/users').subscribe({
      next: response=> this.users=response,
      error:error=>console.log(error),
      complete:()=>console.log('Request has completes')
    })
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString)return;
    const user:User=JSON.parse((userString));
    this.accountService.setCurrentUser(user);
  }
}
