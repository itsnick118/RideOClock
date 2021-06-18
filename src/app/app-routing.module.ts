import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { EditComponent } from './edit/edit.component';
import { BookingComponent } from './booking/booking.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'bookings', component: BookingComponent },
  { path: 'edit', component: EditComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'aboutus', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
