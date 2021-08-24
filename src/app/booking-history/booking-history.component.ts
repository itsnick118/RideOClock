import { BookingsService } from './../_services/bookings.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../_models/booking';
import { MembersService } from '../_services/members.service';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../_models/member';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  members: Member;
  bookings: Booking[];

  constructor(private bookingService: BookingsService,
    private memberservice: MembersService,
    private _activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.loadHistory();
    let membercode: string = this._activatedRoute.snapshot.params['id'];
    let mcode: number = parseInt(membercode);
    this.memberservice
      .getMemberbyid(mcode)
      .subscribe((data) => (this.members = data));
    this.loadMember();

  }

  loadHistory() {
  this.bookingService.getBookings().subscribe((bookings) => {
    this.bookings = bookings;
  });

}

loadMember() {
  this.memberservice
    .getMember(this._activatedRoute.snapshot.paramMap.get('username'))
    .subscribe((member) => {
      this.members = member;
    });
}
}
