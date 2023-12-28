import {Component, OnInit} from '@angular/core';
import {AccountService} from "../_service/account.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  model:any = {};

  loggedIn= false;
  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
  }
  login(){
    this.accountService.login(this.model).subscribe({
      next: response =>{
        console.log(response);
        this.loggedIn=true;
      },
      error: error =>console.log(error)
    })
  }

  logout(){
    this.loggedIn = false;
  }
}
