import { Component, OnInit } from "@angular/core";
import { Member } from "src/app/_models/member";
import { MembersService } from "src/app/_services/members.service";


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  members: Member[];
  member:Member;

  constructor(private memberservice: MembersService) {

  }

  ngOnInit(): void {
    this.loadMembers();

  }
  loadMembers() {
    this.memberservice.getMembers().subscribe((members) => {
      this.members = members;
    });
  }








}
