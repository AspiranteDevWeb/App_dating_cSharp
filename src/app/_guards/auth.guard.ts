import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AccountService} from "../_service/account.service";
import {ToastrService} from "ngx-toastr";
import {map} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const accoutService = inject(AccountService);
  const toastr= inject(ToastrService);

  return accoutService.currentUser$.pipe(
    map(user=>{
      if(user) return true;
      else {
        toastr.error('you shall not pass');
        return false;
      }
    })
  )
};
