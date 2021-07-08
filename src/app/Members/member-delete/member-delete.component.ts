import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { MembersService } from '../../_services/members.service';

@Component({
  selector: 'app-member-delete',
  templateUrl: './member-delete.component.html',
  styleUrls: ['./member-delete.component.css']
})
export class MemberDeleteComponent implements OnInit {

  member:Member;

  constructor(private memberservice:MembersService,private _activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let membercode:string=this._activatedRoute.snapshot.params['id'];
    let mcode:number=parseInt(membercode);
    this.memberservice.getMemberbyid(mcode).subscribe(data=>this.member=data);
  }

  deletedata(){
    this.memberservice.deletemember(this.member.id).subscribe();
    this.router.navigate(['/lists'])
  }
}
