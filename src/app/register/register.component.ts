import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountService} from "../_service/account.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
 // @Input() usersFromHomeComponent:any;
  @Output() cancelRegister = new EventEmitter();
  model:any={}

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {

        this.cancel();
      },
      error:error => console.log(error)
    })

  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
