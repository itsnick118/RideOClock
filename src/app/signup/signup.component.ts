import { MembersService } from './../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  pmembers:any



  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
  }

  postmembers(){
    this.membersService.postmembers(this.pmembers).subscribe(response=>{
      console.log(response);
    })
  }

  cancel(){
    console.log("cancelled")
  }

}
