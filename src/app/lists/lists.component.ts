import { Member } from './../_models/member';
import { MembersService } from './../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {



  members:Member[];






  constructor(private memberservice:MembersService){}

  ngOnInit():void {

   this.loadMembers();
  }
  loadMembers(){
    this.memberservice.getMembers().subscribe(members=>{
      this.members=members;
  })
}

}
