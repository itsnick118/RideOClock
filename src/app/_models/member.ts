import { Booking } from "./booking";

export interface Member {
  id:number;
  firstName: string;
  lastName: string;
  gender: string;
  mobile: string;
  email: string;
  address: string;
  drivinglic: string;
  DateOfBirth: Date;
  bookings:Booking[];
}
