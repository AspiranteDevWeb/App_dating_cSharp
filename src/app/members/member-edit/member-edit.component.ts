import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../_service/account.service";
import {MembersService} from "../../_service/members.service";
import {take} from "rxjs";
import {Member} from "../../_models/member";
import {User} from "../../_models/user";

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit{

  member: Member | undefined;
  user: User | null= null;
  constructor(private accountService: AccountService, private memberService: MembersService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next:user => this.user = user
    })
  }
  ngOnInit() {
    this.loadMember();
  }

  loadMember(){
    if (!this.user) return;
    this.memberService.getMember(this.user.username).subscribe({
      next: member => this.member = member
    })
  }
}
