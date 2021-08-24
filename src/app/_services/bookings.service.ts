import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../_models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBookings(){
    return this.http.get<Booking[]>(this.baseUrl+'bookings');
  }

  postBookings(bookings: Booking) {
    return this.http.post(this.baseUrl + 'users/add-booking', bookings);
  }

}
