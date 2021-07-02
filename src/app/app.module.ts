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
import { SignupComponent } from './signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { ListsComponent } from './lists/lists.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker"
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutusComponent,
    EditComponent,
    SignupComponent,
    BookingComponent,
    ListsComponent,
    SigninComponent,
    RegistrationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
