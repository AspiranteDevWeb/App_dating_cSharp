import {Component, OnInit} from '@angular/core';
import {AccountService} from "../_service/account.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Observable, of} from "rxjs";
import {User} from "../_models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  model:any = {};

  //loggedIn= false;
  //currentUser$: Observable<User | null> = of(null);
  constructor(public accountService: AccountService, private router: Router) {
  }

  ngOnInit(): void {
    //this.getCurrentUser();
   // this.currentUser$ = this.accountService.currentUser$;
  }


  login(){
    this.accountService.login(this.model).subscribe({
      next: () =>this.router.navigateByUrl('/members'),

      error: error =>console.log(error)
    })
  }
//this->"()", and this->"_" .=>are the same
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');

  }
}
