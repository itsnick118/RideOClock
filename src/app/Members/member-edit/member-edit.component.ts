import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';


@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  member:Member;

  constructor(private memberservice:MembersService,private _activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let membercode:string=this._activatedRoute.snapshot.params['id'];
    let mcode:number=parseInt(membercode);
    this.memberservice.getMemberbyid(mcode).subscribe(data=>this.member=data);
  }

  update(frm){
  if(frm.invalid)
  return;

  console.log(this.member);

  this.memberservice.updateMember(this.member).subscribe();

  alert("successfully updated");
  }

}
