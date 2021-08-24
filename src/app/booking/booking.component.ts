import { BookingsService } from './../_services/bookings.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  today: Date;
  minDate: Date;
  BookingForm: FormGroup;
  selectedCarType = 0;
  Car = [];

  constructor(private bookingservice: BookingsService, private router: Router,  private fb: FormBuilder) {
    this.minDate = new Date();
    this.today = new Date();
    this.minDate.setDate(this.today.getDate() + 1);

  }

  ngOnInit(): void {
    this.initiliazeForm();
  }

  initiliazeForm() {
    this.BookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      carType: ['', Validators.required],
      car: ['', Validators.required],
    });
  }

  Book() {
    this.bookingservice
      .postBookings(this.BookingForm.value)
      .subscribe((data) => {
        this.router.navigateByUrl('/lists');
        console.log(data);
      });
    alert('you have successfully Booked your Car ');
  }
  cancel() {
    console.log('cancelled');
    alert('cancelled');
  }


  onSelectCarType(carType_id: number) {
    this.selectedCarType = carType_id;
    this.Car = this.getCars().filter((item) => {
      return item.carType_id === Number(carType_id);
    });
  }
  getCarType() {
    return [
      { id: 1, name: 'mini' },
      { id: 2, name: 'sedan' },
      { id: 3, name: 'xuv' },
    ];
  }
  getCars() {
    return [
      { id: 1, carType_id: 1, name: 'Wagon R' },
      { id: 2, carType_id: 1, name: 'KUV' },
      { id: 3, carType_id: 2, name: 'Dezire' },
      { id: 4, carType_id: 2, name: 'Verna' },
      { id: 5, carType_id: 3, name: 'Nexon' },
      { id: 6, carType_id: 3, name: 'Fortuner' },
    ];
  }
}
