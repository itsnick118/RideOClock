import { AccountService } from './../_services/account.service';
import { HttpClient } from '@angular/common/http';
import { Member } from './../_models/member';
import { MembersService } from './../_services/members.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  genders = ['male', 'female'];

  registerForm: FormGroup;

  maxDate: Date;

  validationErrors: string[] = [];

  model: any = {};

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initiliazeForm();

  }

  initiliazeForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      drivinglic: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      confirmPassword: [
        '',
        [Validators.required, this.matchValues('password')],
      ],
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
    };
  }

  register() {
    this.accountService.register(this.registerForm.value).subscribe(
      (response) => {
        console.log(response);
        this.cancel();
      },
      error => {
        this.validationErrors = error;
      });
    this.router.navigate(['/bookings']);
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
