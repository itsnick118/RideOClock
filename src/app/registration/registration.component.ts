import { Member } from './../_models/member';
import { MembersService } from './../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  member:Member ;

  constructor(private membersService:MembersService, private router:Router) {}

  ngOnInit(): void {}

  register() {
    this.membersService.postMembers(this.member).subscribe(
      data=>{console.log('response',data);
      this.router.navigateByUrl("/lists")

      }
    )
  }

  cancel() {
    console.log('cancelled');
  }
}
