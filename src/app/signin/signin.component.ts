import { AccountService } from './../_services/account.service';
import { UsersService } from './../_services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  model: any = {};

  loggedIn: boolean;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    // this.getCurrentUser();
  }

  login() {
    /*
    this.accountService.login(this.model).subscribe(response=>{
      console.log(response);
      this.loggedIn=true;
    },error=>{
      console.log(error);
    })*/
    this.accountService.login(this.model).subscribe((response) => {
      console.log(response);
      this.loggedIn = true;
    },error=>{
      console.log(error);
    });
  }

    logout(){
     // this.accountService.logout();
      this.loggedIn=false;
    }
/*
    getCurrentUser(){
      this.accountService.currentUsers.subscribe(user=>{
        this.loggedIn=!!user;
      }),error=>{
        console.log(error);
    }
  }*/
}
