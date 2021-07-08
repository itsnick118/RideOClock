import { Member } from './../_models/member';
import { MembersService } from './../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  member:Member;

  constructor(private memberservice:MembersService,private _activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let membercode:string=this._activatedRoute.snapshot.params['code'];
    let mcode:number=parseInt(membercode);
    this.memberservice.getMemberbyid(mcode).subscribe(data=>this.member=data);
  }


}
