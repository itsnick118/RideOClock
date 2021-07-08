import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EditComponent } from './edit/edit.component';
import {DropdownModule} from 'primeng/dropdown';
import { BookingComponent } from './booking/booking.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker"
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { InputTextModule } from "primeng/inputtext";
import {CalendarModule} from 'primeng/calendar';
import { MemberDeleteComponent } from './Members/member-delete/member-delete.component';
import { MemberEditComponent } from './Members/member-edit/member-edit.component';
import { MemberDetailsComponent } from './Members/member-details/member-details.component';
import { ListsComponent } from './Members/lists/lists.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutusComponent,
    EditComponent,
    ListsComponent,
    BookingComponent,
    SigninComponent,
    RegistrationComponent,
    MemberDeleteComponent,
    MemberEditComponent,
    MemberDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
