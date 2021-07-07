import { BookingsService } from './../_services/bookings.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  date1= Date;

  cities: any;

  BookingForm: FormGroup;

  constructor(private bookingservice: BookingsService, private router: Router) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  ngOnInit(): void {
    this.initiliazeForm();
  }

  initiliazeForm(){
    this.BookingForm=new FormGroup({
      gender:new FormControl('', Validators.required),


    })
  }

  Book() {
    this.bookingservice
      .postBookings(this.BookingForm.value)
      .subscribe((data) => {
        this.router.navigateByUrl('/lists');
      });
      alert("you have successfully Booked your Car ");

    }
  cancel() {
    console.log('cancelled');
    alert("cancelled");
  }
}

