import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
})
export class MemberDetailsComponent implements OnInit {
  members: Member;

  constructor(
    private memberservice: MembersService,
    private accountservice: AccountService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let membercode: string = this._activatedRoute.snapshot.params['id'];
    let mcode: number = parseInt(membercode);
    this.memberservice
      .getMemberbyid(mcode)
      .subscribe((data) => (this.members = data));
    this.loadMember();
  }

  goback() {
    console.log('goback');
    this.router.navigate(['/lists']);
  }

  loadMember() {
    this.memberservice
      .getMember(this._activatedRoute.snapshot.paramMap.get('username'))
      .subscribe((member) => {
        this.members = member;
      });
  }
}
