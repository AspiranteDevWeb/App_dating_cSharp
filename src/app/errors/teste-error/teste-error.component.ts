import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-teste-error',
  templateUrl: './teste-error.component.html',
  styleUrls: ['./teste-error.component.css']
})
export class TesteErrorComponent implements OnInit{

  baseUrl = 'https://localhost:5017/api';

  validationErrors: string[] =[];

//4200
  constructor(private http: HttpClient) {
  }

  get404Error(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400Error(){
    this.http.get(this.baseUrl+ 'buggy/bad-request').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get500Error() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
      next: response=>console.log(response),
      error: error =>console.log(error)
    })
  }

  get401Error(){
    this.http.get(this.baseUrl + 'buggy/auth').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400ValidationError(){
    this.http.post(this.baseUrl + 'account/register',{}).subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error);
        this.validationErrors=error;
      }
    })
  }
  ngOnInit():void{}
}
