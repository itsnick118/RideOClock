import { MembersService } from './../_services/members.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { ToastrService } from 'ngx-toastr';
import { Member } from '../_models/member';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  members: Member[];

  constructor(
    public accountService: AccountService,
    private membersService: MembersService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  login() {
    /*
    this.accountService.login(this.model).subscribe(response=>{
      console.log(response);
      this.loggedIn=true;
    },error=>{
      console.log(error);
    })*/
    this.accountService.login(this.model).subscribe(
      (response) => {
        console.log(response);
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error);
      },
    );
    this.router.navigateByUrl('/members');

  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  loadMembers() {
    this.membersService.getMembers().subscribe((members) => {
      this.members = members;
    });

  }


}
