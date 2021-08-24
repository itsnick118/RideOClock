import { AuthGuard } from './_guards/auth.guard';


import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EditComponent } from './edit/edit.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDeleteComponent } from './Members/member-delete/member-delete.component';
import { ListsComponent } from './Members/lists/lists.component';
import { MemberDetailsComponent } from './Members/member-details/member-details.component';
import { MemberEditComponent } from './Members/member-edit/member-edit.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lists', component: ListsComponent, canActivate:[AuthGuard]},
  { path: 'bookings', component: BookingComponent },
  { path: 'edits/:username', component: EditComponent },
  { path: 'members/:username', component: MemberDetailsComponent },
  { path: 'medits/:username', component: MemberEditComponent },
  { path: 'mdeletes/:userma,e', component: MemberDeleteComponent },
  { path: 'aboutus', component: AboutusComponent },
  {path:'login',component:SigninComponent},
  {path:'registration',component:RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
