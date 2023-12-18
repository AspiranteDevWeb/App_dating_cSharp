import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'testeDating01';
  users:any;
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {//5194
    this.http.get('http://localhost:5017/api/users').subscribe({
      next: response=> this.users=response,
      error:error=>console.log(error),
      complete:()=>console.log('Request has completes')
    })
  }
}
