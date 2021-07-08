import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';


@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  members:Member;

  constructor(private memberservice:MembersService,private _activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let membercode:string=this._activatedRoute.snapshot.params['id'];
    let mcode:number=parseInt(membercode);
    this.memberservice.getMemberbyid(mcode).subscribe(data=>this.members=data);
  }

  goback(){
    console.log("goback");
    this.router.navigate(['/lists']);
  }


}
