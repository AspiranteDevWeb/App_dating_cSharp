import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountService} from "../_service/account.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
 // @Input() usersFromHomeComponent:any;
  @Output() cancelRegister = new EventEmitter();
  model:any={}
  registerForm: FormGroup = new FormGroup({});

  constructor(private accountService: AccountService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(){
    this.registerForm= new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    })
  }
  register(){
    console.log(this.registerForm?.value);
   /* this.accountService.register(this.model).subscribe({
      next: () => {

        this.cancel();
      },
      error:error => {
        this.toastr.error(error.error)
          console.log(error)
      }
    })
**/

  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
