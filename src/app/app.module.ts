import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDatepickerModule, MatNativeDateModule, MatInputModule, MatSelectModule, MatFormFieldModule, } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { DatePipe } from '@angular/common';
import { TravelDetailsFormComponent } from './travel-details-form/travel-details-form.component';
import { HotelDetailsTableComponent } from './hotel-details-table/hotel-details-table.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    TravelDetailsFormComponent,
    HotelDetailsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
