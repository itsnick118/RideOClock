import { BookingsService } from './../_services/bookings.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../_models/booking';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  bookings: Booking[];

  constructor(private bookingService: BookingsService) { }

  ngOnInit(): void {
    this.loadHistory();

  }

  loadHistory() {
  this.bookingService.getBookings().subscribe((bookings) => {
    this.bookings = bookings;
  });
}
}
