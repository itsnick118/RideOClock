import { HttpClient } from '@angular/common/http';
import { Member } from './../_models/member';
import { MembersService } from './../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  genders=['male','female']
  registerForm: FormGroup;

  constructor(private membersService: MembersService, private router: Router) {}

  ngOnInit(): void {
    this.initiliazeForm();
  }

  initiliazeForm(){
    this.registerForm=new FormGroup({
      firstName:new FormControl('', Validators.required),
      lastName:new FormControl('',Validators.required),
      gender:new FormControl('', Validators.required),
      mobile:new FormControl('', [Validators.required, Validators.minLength(10)]),
      email:new FormControl('', Validators.required),
      address:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      drivinglic:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(10)]),

    })
  }

  register() {
    this.membersService
      .postMembers(this.registerForm.value)
      .subscribe((data) => {
        this.router.navigateByUrl('/lists');
      });
  }

  cancel() {
    console.log('cancelled');
  }
}
