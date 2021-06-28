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
  baseUrl = environment.apiUrl;
  amembers:any;

  users=[];

  /*

  constructor(private http: HttpClient) {}



  ngOnInit() {
    this.getusers();
    this.getmembers();
  }

  getmembers() {
    this.http.get(this.baseUrl+'members').subscribe(
      response => {
       this.amembers=response;
      },
      error => {
        console.log(error);
      }
    )
  }

  private getusers(){
    this.http.get('https://localhost:44310/api/users').subscribe(data=>{
      console.log(data);
    })
  }
  */

  members:Member[]=[];

  constructor (private memberservice:MembersService){

  }

  ngOnInit(){
    this.memberservice.getMembers().subscribe(
      data=>this.members=data
    )

  }
}
